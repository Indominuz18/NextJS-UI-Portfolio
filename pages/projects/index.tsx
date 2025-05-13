import ProjectCard from "@/components/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import classes from "./projects.module.css";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DocsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(
      siteConfig.projects.flatMap(project => project.technologies || [])
    )
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter 
    ? siteConfig.projects.filter(project => 
        project.technologies?.includes(filter)
      )
    : siteConfig.projects;

  return (
    <DefaultLayout>
      <section className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto">
        <motion.h1 
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects!
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            alt="projects"
            src="/projects.png"
            width={250}
            height={400}
            className={classes.img}
          />
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className={`px-3 py-1 rounded-full text-sm ${!filter ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${filter === tech ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex flex-row flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((item) => (
            <motion.div
              key={item.link}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard
                link={item.link}
                image={item.image}
                description={item.description}
                alt={item.alt}
                className={classes.card}
                technologies={item.technologies}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
