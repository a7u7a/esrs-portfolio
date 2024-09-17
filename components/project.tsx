import React from 'react'
import Markdown from 'react-markdown'
import { IProject } from '@/lib/types'
import MyCarousel from './carousel'
import ProjectHeader from './project-header'

interface RenderProjectProps {
  project: IProject
}

const Project = ({ project }: RenderProjectProps) => {
  return (
    <section className='flex flex-col' >
      <ProjectHeader project={project} />
      <MyCarousel slides={project.gallery} />
    </section>
  )
}

export default Project
