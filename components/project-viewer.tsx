"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';

interface IGalleryItem {
  type: "image" | "video";
  alt: string
  src: string
  dims: { height: number, width: number }
}

interface IProjectData {
  title: string,
  url: string,
  caption: string,
  client: string
  year: string
  stack: string[]
  gallery: IGalleryItem[]
}

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

        <div className=' '>
          {projectData.gallery.map((item, i) => (
            <div key={i}>{item.type === "image" ? (
              <Image
                src={item.src}
                alt=''
                height={item.dims.height}
                width={item.dims.width}
              />) : (<div>video</div>)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectViewer