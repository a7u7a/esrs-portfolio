"use client";
import React from "react";
import CV from "./cv";
import SpinningLogo from "@/components/spinning-logo";
import { useRotationSpeed, useScrollProgress } from "@/lib/hooks";
import {
  ISanityProject,
  ISanityCollaborator,
  ISanityEducation,
  ISanityPublication,
  ISanityService,
  ISanitySocial,
  ICarouselItem,
} from "@/lib/types";
import FreeLoopingCarousel from "@/components/free-looping-carousel";

interface WorkPageMainProps {
  selectedProjects: ISanityProject[];
  experimentalProjects: ISanityProject[];
  collaborators: ISanityCollaborator[];
  education: ISanityEducation[];
  publications: ISanityPublication[];
  services: ISanityService[];
  socials: ISanitySocial[];
}

const Work = ({
  selectedProjects,
  experimentalProjects,
  collaborators,
  education,
  publications,
  services,
  socials,
}: WorkPageMainProps) => {
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
              <FreeLoopingCarousel
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
              <FreeLoopingCarousel
                slides={project.gallery as ICarouselItem[]}
              />
            )}
          </div>
        ))}
      </section>

      <div className="pb-24 md:pb-52 max-w-6xl mx-3 md:mx-4 relative">
        <section id="cv">
          <CV
            collaborators={collaborators}
            education={education}
            publications={publications}
            services={services}
            socials={socials}
          />
        </section>
      </div>
    </main>
  );
};

export default Work;
