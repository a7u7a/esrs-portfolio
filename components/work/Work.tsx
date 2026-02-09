"use client";
import React from "react";
import SpinningLogo from "@/components/SpinningLogo";
import { useRotationSpeed, useScrollProgress } from "@/lib/hooks";
import { ISanityProject, ICarouselItem } from "@/lib/types";
import Carousel from "@/components/Carousel";

interface WorkPageProps {
  selectedProjects: ISanityProject[];
  experimentalProjects: ISanityProject[];
}

const Work = ({ selectedProjects, experimentalProjects }: WorkPageProps) => {
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress);

  return (
    <main ref={container} className="flex flex-col items-start pt-40 md:pt-48">
      <SpinningLogo
        rotationSpeed={rotationSpeed}
        scrollProgress={scrollProgress}
      />

      {/* Selected Projects */}
      <section className="w-full">
        <h2 className="text-2xl font-bold mx-3 md:mx-4 mb-4">Selected Work</h2>
        {selectedProjects.map((project) => (
          <div key={project._id} className="mb-12">
            <h3 className="text-xl mx-3 md:mx-4 mb-2">{project.title}</h3>
            {project.gallery && project.gallery.length > 0 && (
              <Carousel
                autoScroll={false}
                slides={project.gallery as ICarouselItem[]}
              />
            )}
          </div>
        ))}
      </section>

      {/* Experimental Projects */}
      <section className="w-full mt-12">
        <h2 className="text-2xl font-bold mx-3 md:mx-4 mb-4">
          Experimental Work
        </h2>
        {experimentalProjects.map((project) => (
          <div key={project._id} className="mb-12">
            <h3 className="text-xl mx-3 md:mx-4 mb-2">{project.title}</h3>
            {project.gallery && project.gallery.length > 0 && (
              <Carousel
                autoScroll={false}
                slides={project.gallery as ICarouselItem[]}
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Work;
