import classes from "./contact.module.css";
import DefaultLayout from "@/layouts/default";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4  ">
        <h1 className={classes.title}>Contact Me!</h1>
        <section
          className={`${classes.content} flex flex-grow w-full md:flex-row-reverse sd:flex-col-reverse flex-row-reverse gap-25`}
        >
          <form
            className={`${classes.form} flex flex-col gap-5 justify-center text-center mx-auto`}
          >
            <h1>Don&apos;t Worry Coffee's on me!</h1>
            <Input
              type="email"
              label="Email"
              variant="underlined"
              placeholder="junior@nextui.org"
              className="max-w "
            />

            <Input
              type="text"
              label="Name"
              variant="underlined"
              placeholder="First Last Name"
              className="max-w "
            />
            <Input
              type="phone number"
              label="Phone Number"
              variant="underlined"
              placeholder="+1 (XXX) XXX XXXX"
              className="max-w "
            />
            <Textarea
              label="Message"
              variant="underlined"
              placeholder="Enter your description"
              className="max-w"
            />
            <Button className="mx-auto" color="primary">
              Submit
            </Button>
          </form>

          <div className="flex items-center justify-center mx-auto">
            <Image
              alt="contact-hero"
              src="/hero-contact.png"
              width={300}
              height={300}
              className={`${classes.img}`}
            />
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
