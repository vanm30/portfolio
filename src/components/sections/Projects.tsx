import BaseSection from "./BaseSection";
import Image from "next/image";
import config from "@/configs/config.json";
import { useState } from "react";

interface Project {
  name: string;
  image?: string;  // image is optional
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const hadleSelect = (index: number) => {
    setSelectedIndex(index);
  }

  return (
    <BaseSection>
      <h1 className="font-bold text-6xl">My Projects</h1>
      <div className="flex flex-row gap-8">
        {
          config.Projects.map((project: Project, index) => (
            <button
              className={`flex flex-row gap-4 items-center min-w-44 w-fit h-20 rounded-xl p-4 ${selectedIndex == index ? 'bg-yellow text-black ' : 'bg-black text-white'}`}
              key={index}
              onClick={() => hadleSelect(index)}
            >
              <Image
                src={project?.image || "/vercel.svg"}
                width={40}
                height={40}
                alt={project.name || "Project Image"}
              />
              <p className="text-lg">{project.name}</p>
            </button>
          ))
        }
      </div>
    </BaseSection>
  );
}
