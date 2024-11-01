import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import ArrowUpRight from './arrow-up-right';
import useMeasure from 'react-use-measure'
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import Link from 'next/link';

interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
}

const Slide = ({ children, slide }: SlideProps) => {
  const [ref, bounds] = useMeasure()
  const [hover, setHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const projects = [...selectedProjects, ...experimentalProjects]
  const project = projects.find(p => p.id === slide.id)
  useEffect(() => {
    if (!hover) {
      setShowMore(false)
    }
  }, [hover])
  const handleClick = () => {
    if (!slide.hideMore) setShowMore(!showMore)
  }
  useEffect(() => {
    console.log("bounds.width", bounds.width)
  }, [bounds])
  return (
    // Embla Slide
    <div className="shrink-0 flex flex-col pl-2 pb-2 text-[0.9rem]" onMouseLeave={() => setHovered(false)}>
      <div className='relative hover:cursor-pointer' onClick={handleClick} onMouseEnter={() => setHovered(true)} >
        <div ref={ref} className='h-[250px] md:h-[450px] relative'>
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-[80px] z-10 rounded-b-lg transition-opacity duration-200 ${hover ? 'opacity-50' : 'opacity-0'}`} />

          {children}
        </div>
        <div className={`z-20 absolute mx-1 my-1 bottom-0 inset-x-0 flex justify-between transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <div className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded'>
            {slide.projectTypeOverride || project?.type}
          </div>
          {!slide.hideMore && <div className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded w-[20px] h-[20px] items-center gap-1 relative flex '>

            <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${showMore ? 'opacity-0' : 'opacity-100'}`}>
              <CaretDown />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${showMore ? 'opacity-100' : 'opacity-0'}`}>
              <CaretUp />
            </div>

          </div>}
        </div>
      </div>
      {project && <More maxWidth={bounds.width} collapsed={!showMore} project={project} />}
    </div>
  )
}

export default Slide

interface MoreProps {
  project: IProject
  collapsed: boolean
  maxWidth: number
}

const More = ({ collapsed, project, maxWidth }: MoreProps) => {
  return (
    <div 
      className={`pt-2 pl-2 transition-all duration-200 overflow-hidden relative text-[#414141]`} 
    >
      <div className={`flex flex-col gap-1 z-20`}>
        {project?.fields && project.fields.map((field, index) => (
          <MoreRow key={index} collapsed={collapsed} index={index} length={project.fields?.length || 0}>
            <div >
              {field.url && field.value ? (
                <div>
                  <span className='font-bold pr-1.5'>{field.title}</span>
                  <a className='hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.value}</a>
                </div>
              ) : (null)}
              {field.url && !field.value ? (
                <MoreLink field={field} />
              ) : null}
              {!field.url && field.value ? (
                <div>
                  <span className='font-bold pr-1.5'>{field.title}</span>
                  <span>{field.value}</span>
                </div>
              ) : null}
            </div>
          </MoreRow>
        ))}
      </div>
    </div>
  )
}

interface MoreLinkProps {
  field: IProjectField
}

const MoreLink = ({ field }: MoreLinkProps) => {
  const [hover, setHovered] = useState(false);
  return (
    <Link href={field.url || ''}>
      <div className='flex gap-0' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className={`font-bold ${hover ? 'text-esrs-blue' : ''}`} >{field.title}</div>
        <div>
          <ArrowUpRight hover={hover} size={19} />
        </div>
      </div>
    </Link>
  )
}

interface MoreRowProps {
  collapsed: boolean
  index: number
  children: React.ReactNode
  length: number
}

const MoreRow = ({ collapsed, index, children, length }: MoreRowProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (collapsed) {
      const timer = setTimeout(() => setVisible(false), 50 * (length - index))
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setVisible(true), 50 * index)
      return () => clearTimeout(timer)
    }
  }, [collapsed])

  return (
    <div className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'} transition-all duration-300`}>
      {children}
    </div>
  )
}