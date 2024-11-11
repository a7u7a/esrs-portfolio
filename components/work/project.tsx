import React from 'react'
import { IProject } from '@/lib/types'
import ProjectCarousel from './carousel'
import AccordionWrapper from './accordion-wrapper'

interface RenderProjectProps {
  project: IProject
  onStateChange?: () => void;
}

const Project = ({ project, onStateChange }: RenderProjectProps) => {
  return (
    <AccordionWrapper onStateChange={onStateChange} project={project}>
      <ProjectCarousel slides={project.gallery} />
    </AccordionWrapper>
  )
}

export default Project