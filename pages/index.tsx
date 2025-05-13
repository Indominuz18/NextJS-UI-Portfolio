import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";

import classes from "./page.module.css";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className={`${classes.heroSection} px-4 md:px-0`}>
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className={`${classes.info} md:pr-8`}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lg md:text-xl font-medium">
            Hello, I&apos;m
          </span>

          <TypeAnimation
            className="my-4 text-2xl md:text-3xl lg:text-4xl"
            cursor={true}
            repeat={Infinity}
            sequence={[
              "Manmeet Singh",
              5000,
              "a Full Stack React Developer",
              1500,
              "a Software Developer",
              1500,
              "an iOS Developer",
              1500,
              "a CS Student @ Simon Fraser University",
              1500,
            ]}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #4F46E5 0%, #10B981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            wrapper="p"
          />

          <motion.h1
            animate={{ opacity: 1 }}
            className={`${classes.description} text-base md:text-lg leading-relaxed max-w-2xl`}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Welcome to my personal portfolio! I'm a Software Developer based in
            Burnaby, British Columbia. I specialize in frameworks like NextJS,
            and have experience with languages including JavaScript, TypeScript,
            and Python. Explore my projects and experience to see how I bring
            ideas to life through code.
          </motion.h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              as={Link}
              color="primary"
              href="/projects"
              size="lg"
              variant="shadow"
            >
              View Projects
            </Button>
            <Button as={Link} href="/contact" size="lg" variant="bordered">
              Contact Me
            </Button>
          </motion.div>
        </motion.section>

        <motion.section
          animate={{ opacity: 1, scale: 1 }}
          className={classes.img}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            priority
            alt="avatar"
            className={`${classes.heroAvatar} drop-shadow-2xl`}
            height={400}
            src={"/hero-1.png"}
            width={400}
          />
        </motion.section>
      </section>
    </DefaultLayout>
  );
}
