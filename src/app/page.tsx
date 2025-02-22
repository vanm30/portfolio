"use client";
import React, { Suspense, lazy } from "react";
import BgFollowCursor from "@/components/BgFollowCursor";
import config from "@/configs/config.json";
import BaseSection from "@/components/sections/BaseSection";

const importSection = (component: string) => {
  return lazy(() => import(`@/components/sections/${component}`));
}

function FallBackView(sectionIndex: number) {
  return (
    <BaseSection sectionIndex={sectionIndex}>
      <div>Loading...</div>
    </BaseSection>
  );
}


export default function Home() {

  return (
    <>
      <BgFollowCursor />
      <main
        className="h-full text-sm overflow-y-auto"
      >
        {config.Sections.map((section, index) => {
          const Section = importSection(section);
          return (
            <Suspense key={index} fallback={
              FallBackView(index)
            }>
              <BaseSection sectionIndex={index}>
                <Section />
              </BaseSection>
            </Suspense>
          )
        })}
      </main>
    </>
  );
}
