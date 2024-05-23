import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function ProjectCard(props: any) {
  return (
    <Card className="max-w-[400px] sm:max-w-md" >
      <CardHeader className="flex gap-3">
        <Image
          alt={props.alt}
          height={500}
          src={`/${props.image}`}
          width={500}
        />
      </CardHeader>
      <Divider />
      <CardBody className="px-4 text-center">
        <h1 className="text-3xl m-4">{props.alt}</h1>
        <p>{props.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={props.link}>
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
