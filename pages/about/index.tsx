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
          <div className={`${classes.description} max-w-lg`}>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </p>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
