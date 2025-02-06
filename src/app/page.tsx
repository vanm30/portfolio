"use client";

import BgFollowCursor from "@/components/BgFollowCursor";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<number | null>(null);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.snap-start');
    let found = false;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0 && !found) {
        found = true;
        setCurrentScreen(index);
      }
    });
  };

  const startRiveAnimationForScreen = (screenIndex: number) => {
    if (screenIndex === 0) {

    } else if (screenIndex === 1) {

    }
  };

  useEffect(() => {
    if (currentScreen !== null) {
      if (currentScreen === 0) {
        startRiveAnimationForScreen(0);
      } else if (currentScreen === 1) {
        startRiveAnimationForScreen(1);
      }
    }
  }, [currentScreen]);

  return (
    <div className="relative h-screen">
      <BgFollowCursor />
      <main ref={scrollRef} className="text-sm h-screen overflow-y-auto snap-y snap-mandatory" onScroll={handleScroll}>
        <div className="flex  flex-col gap-8 h-screen justify-center pl-60 snap-start">
          <h2 className="font-caveat font-bold text-6xl">
            <TypeAnimation
              sequence={[
                'Yo!',
                4000,
                'Hey!',
                4000,
                'Hiii',
                4000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h2>
          <h1 className="font-bold text-6xl">I&apos;m Matej :)</h1>
          <p className="max-w-xl">
            Welcome to my portfolio! I’m a web developer with experience in UI and backend, working towards solid full-stack knowledge.
            <br /> Currently, I work as a system/software engineer, writing component tests, distribution services, CI/CD, and integrating. I also contribute to architecture and UI.
            <br /> I’m based in Pilsen, Czech Republic, I love music, gaming, or losing my nerves fixing errors. <span className="italic text-gray-500">*(ChatGPT wrote this btw...)</span>
          </p>
        </div>
      </main>

    </div>

  );
}
