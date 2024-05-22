import DefaultLayout from "@/layouts/default";
import React from "react";
import classes from "./techstack.module.css";
import Image from "next/image";
import TechstackCard from "@/components/TechstackCard";
import { siteConfig } from "@/config/site";

export default function Index() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center text-center justify-center gap-4 ">
        <h1 className={classes.title}>Welcome to My Tech Stack!</h1>
        <div className={`${classes.techstack} `}>
          {siteConfig.techstack.map((item) => (
            <TechstackCard key={item.Title} title={item.Title} name={item.Name} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
