import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import classes from "./page.module.css";
import { TypeAnimation } from "react-type-animation";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className={`${classes.heroSection}`}>
        <section className={classes.info}>
          <span>Hello, I&apos;m</span>

          <TypeAnimation
            sequence={[
              "Manmeet Singh",
              5000,
              "a Full Stack React Developer",
              1500,
              "a Software Developer",
              1500,
              "a IOS Developer",
              1500,
              "a CS Student @ Simon Fraser University",
              1500,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3em", display: "inline-block" }}
          />
          <h1 className={classes.discription}>
            Welcome to my personal portfolio! I'm a Software Developer based in
            Burnaby, British Columbia. I specialize in frameworks like NextJS,
            and have experience with languages including JavaScript, TypeScript,
            and Python. Explore my projects and experience to see how I bring
            ideas to life through code.
          </h1>
        </section>
        <section className={classes.img}>
          <Image
            className={classes.heroAvatar}
            width={400}
            height={400}
            alt="avatar"
            src={"/hero-1.png"}
          ></Image>
        </section>
      </section>
    </DefaultLayout>
  );
}
