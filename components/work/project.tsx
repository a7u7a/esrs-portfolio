import React from 'react'
import { IProject } from '@/lib/types'
import ProjectCarousel from './carousel'
import AccordionWrapper from './accordion-wrapper'

interface RenderProjectProps {
  project: IProject
  onToggle?: () => void;
  isExpanded: boolean
}

const Project = ({ project, onToggle, isExpanded }: RenderProjectProps) => {
  return (
    <AccordionWrapper isExpanded={isExpanded} onToggle={onToggle} project={project}>
      <ProjectCarousel slides={project.gallery} />
    </AccordionWrapper>
  )
}

export default Project