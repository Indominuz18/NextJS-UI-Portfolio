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
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
        </section>

        <section className={`${classes.tech_stack} `}>
          <h1></h1>
        </section>
      </section>
    </DefaultLayout>
  );
}
