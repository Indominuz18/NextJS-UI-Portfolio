import React from "react";

import DefaultLayout from "@/layouts/default";
import TechstackCard from "@/components/TechstackCard";
import { siteConfig } from "@/config/site";

import classes from "./techstack.module.css";

export default function Index() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center text-center justify-center gap-4 ">
        <h1 className={classes.title}>Welcome to My Tech Stack!</h1>
        <div className={`${classes.techstack} `}>
          {siteConfig.techstack.map((item) => (
            <TechstackCard
              key={item.Title}
              name={item.Name}
              title={item.Title}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
