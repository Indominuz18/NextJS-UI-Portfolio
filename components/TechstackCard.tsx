import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function TechstackCard(props: any) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none p-5 background-color-black">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={100}
        src={`/${props.name}`}
        width={100}
      />
      <CardFooter className="relative left-0 bottom-0 justify-center text-center py-1 before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p>{props.title}</p>
      </CardFooter>
    </Card>
  );
}
