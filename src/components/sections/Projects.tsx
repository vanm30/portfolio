import Image from "next/image";
import config from "@/configs/config.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/globals";

function ProjectView({ project }: { project: Project }) {
  return (
    <div id={project.name} className="flex flex-row px-40">
      <div className="flex flex-col basis-1/2 gap-8">
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p>{project.description}</p>
      </div>
      <div className="basis-1/2">
        {
          project.image && (
            <Image
              src={project.image}
              width={400}
              height={400}
              alt={project.name}
            />
          )
        }
        {
          project.techStack?.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))
        }
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const hadleSelect = (index: number) => {
    setSelectedIndex(index);
  }

  const ANIMATION_DURATION = { seconds: 0.5, milliseconds: 500 };

  return (
    <>
      <div className="flex flex-row gap-8">
        {
          config.Projects.map((project: Project, index) => (
            <button
              className={`relative  min-w-44 w-fit rounded-xl z-0 p-4 bg-black overflow-hidden text-white ${animating && 'disabled'}`}
              key={index}
              onClick={() => {
                hadleSelect(index)
                setAnimating(true)
                setTimeout(() => {
                  setAnimating(false)
                }, ANIMATION_DURATION.milliseconds)
              }
              }
              disabled={animating}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: selectedIndex == index ? "100%" : 0 }}
                transition={{ duration: ANIMATION_DURATION.seconds, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-blue"
              >
              </motion.span>
              <span className="relative flex flex-row gap-4 items-center z-10">
                <Image
                  src={project?.image || "/vercel.svg"}
                  width={40}
                  height={40}
                  alt={project.name || "Project Image"}
                />
                <p className="text-lg">{project.name}</p>
              </span>
            </button>
          ))
        }
      </div>
      <div className="flex flex-row flex-1">
        <ProjectView project={config.Projects[selectedIndex]} />
      </div>
    </>
  );
}
