"use client"
import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import { IProject } from '@/lib/types';
import Markdown from 'react-markdown'
import ArrowUpRight from './arrow-up-right';
interface AccordionItemProps {
  children: any
  project: IProject
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

const AccordionWrapper = ({ children, project }: AccordionItemProps) => {
  const startsCollapsed = project.collapsed ?? false;
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);
  const [collapsed, setCollapsed] = useState(startsCollapsed);
  const [delayedCollapsed, setDelayedCollapsed] = useState(startsCollapsed)
  const [childrenRef, childrenBounds] = useMeasure()
  const [headerRef, headerBounds] = useMeasure()
  const isAnimating = useRef(false);

  const onClick = () => {
    if (!isAnimating.current) {
      setCollapsed((prev) => !prev);
      isAnimating.current = true;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 250)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (collapsed) {
      timer = setTimeout(() => {
        setDelayedCollapsed(true);
        isAnimating.current = false;
      }, 750);
    } else {
      setDelayedCollapsed(false);
      timer = setTimeout(() => {
        isAnimating.current = false;
      }, 750);
    }
    return () => clearTimeout(timer);
  }, [collapsed])

  const totalHeight = headerBounds.height + childrenBounds.height

  return (
    <div className="relative">
      <div className={`${animate ? 'transition-all' : 'transition-none'} relative duration-1000 ease-in-out overflow-hidden`}
        style={{ height: !collapsed ? totalHeight + 'px' : '22px' }}
      >
        {/* Click title to expand */}

        <button
          onClick={onClick}
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
                    <span className='font-bold tracking-wide pr-1.5'>{field.title}</span>
                    <a className='hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.value}</a>
                  </div>
                ) : (null)}
                {field.url && !field.value ? (
                  <div className='flex gap-0'>
                    <a className='font-bold tracking-wide hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.title}</a>
                    <ArrowUpRight size={19} />
                  </div>
                ) : null}
                {!field.url && field.value ? (
                  <div>
                    <span className='font-bold tracking-wide pr-1.5'>{field.title}</span>
                    <span>{field.value}</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <CopyTwoCols project={project} />

        </div>
        <div
          className={`${animate ? 'transition-all' : 'transition-none'} duration-1000 ease-in-out overflow-hidden`}
          style={{ maxHeight: !collapsed ? totalHeight + 'px' : '0px' }}
        >
          <div ref={childrenRef}>
            <div className={'pb-28'}>
              {children} {/* project carousel */}
              <CopyOneCol project={project} />
            </div>
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
  const copy = project.descriptionOne + " " + project.descriptionTwo
  return (
    <div className={`block sm:hidden pt-3 w-full gap-3 text-pretty prose-a:underline hover:prose-a:text-esrs-blue`}>
      <Markdown components={{ a: LinkRenderer }}>{copy}</Markdown>
    </div>
  )
} 