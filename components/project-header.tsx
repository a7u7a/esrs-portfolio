import React from 'react'
import { IProject } from '@/lib/types'
import Markdown from 'react-markdown'
// import { CaretDown, CaretRight } from '@phosphor-icons/react'

interface ProjectHeaderProps {
  project: IProject
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className='flex gap-2'>

      <div className='w-1/4'>
        <h1 className='font-bold'>{project.title}</h1>
        {/* <CaretDown size={32} />
        <CaretRight size={32} /> */}
      </div>

      <div className='w-1/4'>
        <h2><a className='font-bold'>Client</a> {project.client}</h2>
        <h2><a className='font-bold'>Year</a> {project.year}</h2>
        <h2><a className='font-bold'>Stack</a> {project.stack}</h2>
        {project.visit && <h2><a className='font-bold'>Visit</a> <a href={project.visit.url}>{project.visit.title}</a></h2>}
      </div>

      <div className='w-1/4'>
        <Markdown>{project.descriptionOne}</Markdown>
      </div>

      <div className='w-1/4'>
        <Markdown>{project.descriptionTwo}</Markdown>
      </div>
    </div>
  )
}

export default ProjectHeader