import React from 'react'
import Markdown from 'react-markdown'
import { IProject } from '@/lib/types'

interface RenderProjectProps {
  project: IProject
}

const RenderProject = ({ project }: RenderProjectProps) => {

  return (
    <div className='py-6'>
      <h1>{project.title}</h1>
      <h2>Client</h2>
      <Markdown>{project.client}</Markdown>
      <h2>Year</h2>
      <p>{project.year}</p>
      <h2>Tech Stack</h2>
      <Markdown>{project.stack}</Markdown>
      <h2>Project URL</h2>
      <a href={project.url}>{project.url}</a>
      <h2>Description</h2>
      <Markdown>{project.description}</Markdown>
    </div>
  )
}

export default RenderProject