import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectCard from "@/components/card";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

import classes from "./projects.module.css";

export default function DocsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(
      siteConfig.projects.flatMap((project) => project.technologies || []),
    ),
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? siteConfig.projects.filter((project) =>
        project.technologies?.includes(filter),
      )
    : siteConfig.projects;

  return (
    <DefaultLayout>
      <section className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Projects!
        </motion.h1>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            alt="projects"
            className={classes.img}
            height={400}
            src="/projects.png"
            width={250}
          />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className={`px-3 py-1 rounded-full text-sm ${!filter ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${filter === tech ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700"}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-row flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((item) => (
            <motion.div
              key={item.link}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectCard
                alt={item.alt}
                className={classes.card}
                description={item.description}
                image={item.image}
                link={item.link}
                technologies={item.technologies}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
