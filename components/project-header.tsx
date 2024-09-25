"use client"
import React, { forwardRef } from 'react'
import { IProject } from '@/lib/types'
import Markdown from 'react-markdown'


interface ProjectHeaderProps {
  project: IProject
  collapsed: boolean
}

const ProjectHeader = ({ project, collapsed }: ProjectHeaderProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className='flex gap-2'>
      <div className='w-1/4' />

      <div className='w-1/4'>
        <h2><span className='font-bold'>Client</span>  <span>{project.client}</span></h2>
        <h2><span className='font-bold'>Year</span> <span>{project.year}</span></h2>
        <h2><span className='font-bold'>Stack</span> <span>{project.stack}</span></h2>
        {project.visit && <h2 className='font-bold'>Visit</h2>}
      </div>

      <div className={`flex gap-2 w-1/2 transition-opacity ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
        <div className='w-1/2'>
          <Markdown>{project.descriptionOne}</Markdown>
        </div>

        <div className='w-1/2'>
          <Markdown>{project.descriptionTwo}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(ProjectHeader)