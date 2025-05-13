import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import React from "react";
import classes from "./timeline.module.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string[];
  category: "education" | "work";
}

export default function TimelinePage() {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "4AG Robotics",
      subtitle: "Software Developer",
      date: "Sep 2024 - Dec 2024",
      location: "Salmon Arm, BC",
      description: [
        "Developed a web farm app using Next.js, PostgreSQL, Prisma, Material UI, and Kafka to display agricultural automation data in an intuitive and user-friendly manner, improving operational efficiency.",
        "Integrated real-time data from Formant into the web app's UI, enabling users to monitor farm operations seamlessly and make data-driven decisions with a clean and accessible interface.",
        "Optimized PostgreSQL queries using Prisma ORM, reducing query execution times by 30% and enhancing overall app performance, while ensuring data consistency and integrity.",
        "Managed Git version control and streamlined development with a CI/CD pipeline, automating testing and deployment, and improving collaboration through efficient handling of pull requests and merge requests."
      ],
      category: "work"
    },
    {
      id: 2,
      title: "CJSF 90.1",
      subtitle: "Software Developer",
      date: "May 2024 - Aug 2024",
      location: "Burnaby, BC",
      description: [
        "Worked collaboratively with a team of four developers to maintain the CJSF radio station mobile app using React Native. Actively participated in team meetings to discuss and plan app features, updates, and bug fixes.",
        "Utilized React Native to ensure cross-platform compatibility and efficient development processes. Integrated various APIs to support live streaming and other essential app functionalities.",
        "Implemented RESTful APIs to fetch and manage audio files, enabling real-time streaming and reliable access to radio content. Optimized server performance to handle high traffic for live audio streaming."
      ],
      category: "work"
    },
    {
      id: 3,
      title: "Simon Fraser University",
      subtitle: "BSc Computing Science",
      date: "Sep 2021 - Sep 2026",
      location: "Burnaby, BC",
      description: [
        "Pursuing a Bachelor of Science in Computing Science with a focus on software development and computer systems."
      ],
      category: "education"
    }
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-10 px-4">
        <motion.h1 
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h1>

        <div className={classes.timelineContainer}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {timelineItems.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className={`${classes.timelineItem} ${
                  item.category === "education" ? "border-l-blue-500" : "border-l-primary"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className={classes.timelineTitle}>{item.title}</h3>
                  <div className={classes.timelineDate}>
                    <FaCalendarAlt className="inline mr-2" />
                    {item.date}
                  </div>
                </div>
                
                <h4 className={classes.timelineSubtitle}>{item.subtitle}</h4>
                
                <div className={classes.timelineLocation}>
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </div>
                
                <div className="mt-4">
                  <ul className="list-disc pl-5 space-y-2">
                    {item.description.map((point, index) => (
                      <li key={index} className="text-sm md:text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}
