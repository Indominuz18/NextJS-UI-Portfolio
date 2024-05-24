import DefaultLayout from "@/layouts/default";
import classes from "./about.module.css";
import Image from "next/image";
import { Snippet } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <h1 className={classes.title}>About Me!</h1>
        <section
          className={` ${classes.about} flex flex-row items-center justify-center w-full gap-10`}
        >
          <div
            className={`${classes.img} flex items-center justify-center mx-auto`}
          >
            <Image
              alt="about-hero"
              src={`/hero-2.png`}
              width={300}
              height={300}
            />
          </div>
          <div className={`${classes.description} max-w-3xl`}>
            <p>
              Hello! I'm Manmeet Singh, a dedicated Software based in Burnaby,
              British Columbia. With a strong foundation in a variety of
              frameworks, libraries, and languages, I have developed a diverse
              skill set that enables me to tackle complex web development
              projects efficiently. My expertise spans several frameworks and
              libraries, including NextJS, where I excel in building scalable
              server-side rendered applications, and Sveltekit, where I create
              high-performance, reactive web apps. I have extensive experience
              with Node.js for backend services and APIs, and I am skilled in
              developing cross-platform mobile applications using React Native.
              Additionally, I am adept at crafting responsive and visually
              appealing user interfaces with Bootstrap and Tailwind CSS. My
              proficiency with React.js and Redux allows me to create dynamic,
              state-managed web applications, and I have significant experience
              in database management and user authentication using Mongoose and
              Passport.JS. In terms of languages and technologies, I am
              proficient in both frontend and backend development with
              JavaScript and TypeScript. I can build native iOS applications
              with Swift and perform data analysis and machine learning with
              Python. My solid foundation in web design and layout is supported
              by my knowledge of HTML and CSS. Furthermore, I have a strong
              understanding of object-oriented and procedural programming in
              Java, C++, and C. My database expertise includes extensive
              experience in relational database management with SQL Server and
              PostgreSQL, as well as proficiency in handling NoSQL databases and
              real-time data with MongoDB and Firebase. Outside of my
              professional life, I am passionate about maintaining an active
              lifestyle. I enjoy running, going to the gym, and bodybuilding.
              Additionally, I love coding in my free time and exploring new
              places for food. These hobbies keep me balanced and provide a
              great way to unwind and stay creative.
            </p>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
