"use client"
import React, { useRef, useEffect, useState } from 'react'
import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import NavMenu from "@/components/navmenu";
import CV from "@/components/cv"
import Divider from "@/components/divider"
import SpinningLogo from "@/components/spinning-logo";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useScrollProgress } from '@/lib/hooks'

const desiredSegmentLength = 2000

const Main = () => {
  const { container, scrollProgress } = useScrollProgress();

  const handleAccordionChange = () => {
    // Wait for the transition to complete
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1050);
  };

  return (
    <main ref={container} className="flex flex-col items-center bg-white">

      <SpinningLogo scrollProgress={scrollProgress} />
      <Header />

      <div className='pb-[100px] md:pb-[200px] max-w-5xl mx-3 md:mx-8'>
        <div className="h-[10px] md:h-[25px] w-full" />
        <NavMenu />

        <section className="pt-12" id="selected">
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