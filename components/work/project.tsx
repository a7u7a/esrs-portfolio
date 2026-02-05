import React from "react";
import { ISanityProject } from "@/lib/types";
import ProjectCarousel from "./carousel";
import AccordionWrapper from "./accordion-wrapper";

interface RenderProjectProps {
  project: ISanityProject;
  onToggle?: () => void;
  isExpanded: boolean;
}

const Project = ({ project, onToggle, isExpanded }: RenderProjectProps) => {
  return (
    <AccordionWrapper
      isExpanded={isExpanded}
      onToggle={onToggle}
      project={project}
    >
      <ProjectCarousel slides={project.gallery || []} />
    </AccordionWrapper>
  );
};

export default Project;
