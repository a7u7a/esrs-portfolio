"use client"
import React, { useRef, useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";

const MainComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, [])
  const [scrollProgress, setScrollProgress] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    console.log("scrollProgress", scrollProgress);
  }, [scrollProgress])

  useGSAP(() => {
    const setupScrollTrigger = () => {
      if (!container.current) return;
      const proxy = { progress: 0 };
      gsap.to(proxy, {
        ease: "none",
        progress: 1,
        onUpdate: () => setScrollProgress(proxy.progress),
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
          invalidateOnRefresh: true, // Recalculate on resize/refresh
          onUpdate: (self) => {
            scrollTriggerRef.current = self;
          },
        }
      });
    }
    setTimeout(setupScrollTrigger, 2000);
  }, { scope: container })

  const handleAccordionChange = () => {
    // Wait for the transition to complete
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350); // Slightly longer than the transition duration (300ms)
  };


  return (
    <main ref={container}>
      <TestAccordion
        className='bg-red-100'
        onStateChange={handleAccordionChange}
      />
      <TestAccordion
        className='bg-blue-100'
        onStateChange={handleAccordionChange}
      />
      <TestAccordion
        className='bg-yellow-100'
        onStateChange={handleAccordionChange}
      />
    </main>
  )
}

export default MainComponent;

interface TestAccordionProps {
  className?: string;
  onStateChange?: () => void;
}

const TestAccordion = ({ className, onStateChange }: TestAccordionProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
    onStateChange?.();
  };

  return (
    <div
      onClick={handleClick}
      style={{ height: collapsed ? '200px' : '1000px' }}
      className={`${className} w-full transition-all duration-300 flex items-center justify-center`}
    >
      {"henlo"}
    </div>
  );
};