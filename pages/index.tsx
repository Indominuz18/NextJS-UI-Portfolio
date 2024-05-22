import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import classes from "./page.module.css";
import { TypeAnimation } from 'react-type-animation';

export default function IndexPage() {
  return (
    <DefaultLayout>
          <section className={`${classes.heroSection}`}>
      <section className={classes.info}>
        <span>Hello, I'm</span>

        <TypeAnimation
      sequence={[
        'Manmeet Singh', 
        5000, 
        'a Full Stack React Developer', 
        1500, 
        'a Software Developer', 
        1500, 
        'a IOS Developer',
         1500,
         "a CS Student @ Simon Fraser University",
         1500
      ]}
      wrapper="p"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block',  }}
    />
        <h1 className={classes.discription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
