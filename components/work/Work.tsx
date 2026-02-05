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
} from "@/lib/types";
import Link from "next/link";

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
