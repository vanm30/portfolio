"use client";

import BgFollowCursor from "@/components/BgFollowCursor";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<number | null>(null);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".snap-start");
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
    <>
      <BgFollowCursor />
      <main
        ref={scrollRef}
        className="h-full text-sm overflow-y-auto snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        <Hero />
        <Projects />
      </main>
    </>
  );
}
