"use client"
import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import { IProject } from '@/lib/types';
import Markdown from 'react-markdown'
import ArrowUpRight from './arrow-up-right';
interface AccordionItemProps {
  children: any
  project: IProject
  onToggle?: () => void;
  isExpanded: boolean
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

const AccordionWrapper = ({ children, project, onToggle ,isExpanded}: AccordionItemProps) => {
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);
  const [childrenRef, childrenBounds] = useMeasure()
  const [headerRef, headerBounds] = useMeasure();

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const totalHeight = headerBounds.height + childrenBounds.height

  return (
    <div className="relative">
      <div className={`${animate ? 'transition-all' : 'transition-none'} relative duration-1000 ease-in-out overflow-hidden`}
        style={{ height: isExpanded ? totalHeight + 'px' : '22px' }}
      >
        {/* Click title to expand */}

        <button
          onClick={onToggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`
              relative z-10 flex justify-between sm:grid sm:grid-cols-4 w-full mb-8
              ${hover ? 'text-esrs-blue' : ''}
            `}
        >
          <div className={`text-left w-1/2 sm:w-full`}>
            {project.title}
          </div>
          <div className='hidden sm:block text-left col-span-2'>
            <h3><span>{project.what}</span></h3>
          </div>
          <div className='text-right'>
            <h3><span>{project.date}</span></h3>
          </div>
        </button>

        {/* project details */}
        <div ref={headerRef} className='flex flex-col sm:flex-row gap-3 justify-between'>

          <div className='w-1/2 flex flex-col'>
            {project.fields && project.fields.map((field, index) => (
              <div key={index}>
                {/* Different field variations */}
                {field.url && field.value ? (
                  <div>
                    <span className='font-bold pr-1.5'>{field.title}</span>
                    <a className='hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.value}</a>
                  </div>
                ) : (null)}
                {field.url && !field.value ? (
                  <div className='flex gap-0'>
                    <a className='font-bold hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.title}</a>
                    <ArrowUpRight size={19} />
                  </div>
                ) : null}
                {!field.url && field.value ? (
                  <div>
                    <span className='font-bold pr-1.5'>{field.title}</span>
                    <span>{field.value}</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <CopyTwoCols project={project} />

        </div>

        <div ref={childrenRef}>
          <div className={'pb-28'}>
            {children} {/* project carousel */}
            <CopyOneCol project={project} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AccordionWrapper;

interface CopyProps {
  project: IProject
}

const CopyTwoCols = ({ project }: CopyProps) => {
  return (
    <div className={`hidden sm:flex flex-row w-2/3 gap-3 text-pretty prose-a:underline hover:prose-a:text-esrs-blue`}>
      <div className='w-1/2'>
        <Markdown components={{ a: LinkRenderer }}>{project.descriptionOne}</Markdown>
      </div>
      <div className='w-1/2'>
        <Markdown components={{ a: LinkRenderer }}>{project.descriptionTwo}</Markdown>
      </div>
    </div>
  )
}

const CopyOneCol = ({ project }: CopyProps) => {
  return (
    <div className={`block sm:hidden pt-3 w-full gap-3 text-pretty prose-a:underline hover:prose-a:text-esrs-blue`}>
      <Markdown components={{ a: LinkRenderer }}>{project.descriptionOne}</Markdown>
      <Markdown components={{ a: LinkRenderer }}>{project.descriptionTwo}</Markdown>
    </div>
  )
} 