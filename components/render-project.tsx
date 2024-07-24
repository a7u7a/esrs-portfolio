import React from 'react'
import Markdown from 'react-markdown'
import { IProject } from '@/lib/types'
import Carousel from './carousel'
interface RenderProjectProps {
  project: IProject
}

const RenderProject = ({ project }: RenderProjectProps) => {

  return (
    <section className='flex flex-col' >
      <div className='py-6 flex gap-2'>

        <div className='w-1/4'>
          <h1 className='font-bold'>{project.title}</h1>
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

      <Carousel />

    </section>
  )
}

export default RenderProject