import DefaultLayout from "@/layouts/default";
import classes from "./about.module.css";
import Image from "next/image";
import { Snippet } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <motion.h1 
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me!
        </motion.h1>
        <section
          className={`${classes.about} flex flex-col md:flex-row items-center justify-center w-full gap-10 px-4 md:px-10`}
        >
          <motion.div
            className={`${classes.img} flex items-center justify-center mx-auto`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="about-hero"
              src={`/hero-2.png`}
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div 
            className={`${classes.description} max-w-3xl text-base md:text-lg leading-relaxed`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-justify md:text-left space-y-4 mb-4">
              Hello! I'm Manmeet Singh, a dedicated Software Developer based in Burnaby, British Columbia.
            </p>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Professional Skills</h3>
            <p className="mb-4">
              With a strong foundation in a variety of frameworks, libraries, and languages, 
              I have developed a diverse skill set that enables me to tackle complex web development 
              projects efficiently. My expertise spans several frameworks and libraries, including 
              NextJS, Sveltekit, Node.js, and React Native.
            </p>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Technical Proficiency</h3>
            <p className="mb-4">
              I am proficient in both frontend and backend development with JavaScript and TypeScript.
              I can build native iOS applications with Swift and perform data analysis and machine learning with Python.
              My database expertise includes relational database management with SQL Server and PostgreSQL,
              as well as NoSQL databases and real-time data with MongoDB and Firebase.
            </p>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Beyond Coding</h3>
            <p>
              Outside of my professional life, I am passionate about maintaining an active lifestyle.
              I enjoy running, going to the gym, and bodybuilding. Additionally, I love coding in my free time
              and exploring new places for food. These hobbies keep me balanced and provide a great way to
              unwind and stay creative.
            </p>
          </motion.div>
        </section>
      </section>
    </DefaultLayout>
  );
}
