import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";

interface ProjectCardProps {
  alt: string;
  image: string;
  description: string;
  link: string;
  className?: string;
  technologies?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const { alt, image, description, link, technologies = [] } = props;

  return (
    <Card className="max-w-[400px] md:max-w-[400px] sm:max-w-[300px] hover:scale-105 transition-transform duration-300">
      <CardHeader className="flex gap-3">
        <Image alt={alt} height={500} src={`/${image}`} width={500} />
      </CardHeader>
      <Divider />
      <CardBody className="px-4 text-center">
        <h1 className="text-3xl m-4">{alt}</h1>
        <p>{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {technologies.map((tech) => (
              <Chip key={tech} color="primary" size="sm" variant="flat">
                {tech}
              </Chip>
            ))}
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
