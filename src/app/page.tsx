"use client";
import React, { Suspense, lazy } from "react";
import BgFollowCursor from "@/components/BgFollowCursor";
import config from "@/configs/config.json";
import BaseSection from "@/components/sections/BaseSection";
import useDisableMiddleWheel from "@/hooks/useDisableMiddleWheel";
import useMouseWheelHandler from "@/hooks/useMouseWheelHandler";

// Dynamically load sections
const importSection = (component: string) => {
  return lazy(() => import(`@/components/sections/${component}`));
}

// Fallback for Suspense
function FallBackView(sectionIndex: number) {
  return (
    <BaseSection sectionIndex={sectionIndex}>
      <div>Loading...</div>
    </BaseSection>
  );
}

export default function Home() {
  // Use hooks for mouse wheel handling and middle-click scrolling disabling
  useDisableMiddleWheel();
  useMouseWheelHandler();

  return (
    <>
      <BgFollowCursor />
      <main className="h-full text-sm overflow-y-auto">
        {config.Sections.map((section, index) => {
          const Section = importSection(section); // Dynamically import the section
          return (
            <Suspense key={index} fallback={FallBackView(index)}>
              <BaseSection sectionIndex={index}>
                <Section />
              </BaseSection>
            </Suspense>
          );
        })}
      </main>
    </>
  );
}

