import React from 'react'
import { IProject } from '@/lib/types'
import ProjectCarousel from './carousel'
import AccordionWrapper from './accordion-wrapper'

interface RenderProjectProps {
  project: IProject
}

const Project = ({ project }: RenderProjectProps) => {
  return (
    <AccordionWrapper project={project}>
          <ProjectCarousel slides={project.gallery} />     
    </AccordionWrapper>
  )
}

export default Project
