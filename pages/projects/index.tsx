import ProjectCard from "@/components/card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import classes from "./projects.module.css";
import { siteConfig } from "@/config/site";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto">
        <h1 className={classes.title}>Proejcts!</h1>
        <Image
          alt="projects"
          src="/projects.png"
          width={250}
          height={400}
          className={classes.img}
        />
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {siteConfig.projects.map((item) => (
            <ProjectCard
              key={item.link}
              link={item.link}
              image={item.image}
              description={item.description}
              alt={item.alt}
              className={classes.card}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
