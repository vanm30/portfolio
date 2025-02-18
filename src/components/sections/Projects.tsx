import Image from "next/image";
import config from "@/configs/config.json";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  image?: string;
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

      </div>
    </>
  );
}
