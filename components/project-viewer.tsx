"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { IProjectData } from '@/lib/types';
import Carousel from './carousel';

interface ProjectViewerProps {
  projectData: IProjectData
}

const ProjectViewer = ({ projectData }: ProjectViewerProps) => {

  useEffect(() => {
    console.log("projectData", projectData);
  }, [])

  return (
    <div className='ml-1 mr-1 mt-4 max-w-max text-[0.7rem] md:text-[0.9rem] md:w-1/2'>
      <div className='flex flex-col '>
        <div className='font-bold pb-2'>
          {projectData.title}
        </div>

        <div className='flex mb-2'>
          <div className='flex flex-col w-1/2'>
            <div>
              <span className='font-bold'>Client</span> <span> {projectData.client}</span>
            </div>
            <div>
              <span className='font-bold'>Year</span> <span> {projectData.year}</span>
            </div>
            <div>
              <span className='font-bold'>Stack </span>
              {projectData.stack.map((item, i) => (<><span key={i}>{item}</span><span>, </span></>))}
            </div>
            <div>
              <span className='font-bold'>Visit</span> <span>{projectData.url}</span>
            </div>
          </div>
          <div className='w-1/2'>
            {projectData.caption}
          </div>
        </div>

        <Carousel gallery={projectData.gallery} />

        
      </div>
    </div>
  )
}

export default ProjectViewer