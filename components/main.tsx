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

const desiredSegmentLength = 2000

const Main = () => {

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, [])
  const container = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(() => {

    function getTurns() {
      // Calculate the number of turns the icon must make from scrollstart to end
      const bodyHeight = document.documentElement.scrollHeight - window.innerHeight
      const segments = Math.round(bodyHeight / desiredSegmentLength)
      return Math.max(1, segments);
    }

    const setupScrollTrigger = () => {
      const turns = getTurns();
      if (!container.current) return;
      const proxy = { progress: 0 };
      gsap.to(proxy, {
        ease: "none",
        progress: 1,
        onUpdate: () => {
          // lower the floating point precision
          const p = (proxy.progress * turns * 100) / 100
          console.log('p',p)
          setScrollProgress(p)
        },
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true, // Recalculate on resize/refresh
          onUpdate: (self) => {
            scrollTriggerRef.current = self;
          },
        }
      });
    }
    setTimeout(setupScrollTrigger, 1000);
  }, { scope: container })

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