"use client"
import React, { useRef, useEffect, useState } from 'react'
import Project from "./project";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import CV from "./cv"
import Divider from "./divider"
import SpinningLogo from "@/components/spinning-logo";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRotationSpeed, useScrollProgress } from '@/lib/hooks';

const Main = () => {
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress)

  const handleAccordionChange = () => {
    // Wait for the transition to complete
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1050);
  };

  return (
    <main ref={container} className="flex flex-col items-center bg-white">

      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />

      <div className='pb-[100px] md:pb-[200px] max-w-5xl mx-3 md:mx-8'>
        <div className="h-[10px] md:h-[25px] w-full" />

        <section className="pt-12" id="selected">
          <Divider title="Esteban Serrano - Selected Work" />
          <ul className="pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {selectedProjects.map((project, i) => (
              <li key={i} className=''>
                <Project onStateChange={handleAccordionChange} key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-12 sm:pt-36" id="experimental">
          <Divider title="Experimental Work" subtitle="What" />
          <ul className="pt-6 sm:pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {experimentalProjects.map((project, i) => (
              <li key={i}>
                <Project onStateChange={handleAccordionChange} key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-12 sm:pt-36">
          <CV />
        </section>

      </div >
    </main>
  );
}


export default Main