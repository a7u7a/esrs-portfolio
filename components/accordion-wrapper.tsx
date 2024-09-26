"use client"
import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import { IProject } from '@/lib/types';
import Markdown from 'react-markdown'
import { a } from 'framer-motion/client';

interface AccordionItemProps {
  children: any
  project: IProject
}

const AccordionWrapper = ({ children, project }: AccordionItemProps) => {
  const canToggle = project.canToggle ?? false;
  const startsCollapsed = project.collapsed ?? false;
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);
  const [collapsed, setCollapsed] = useState(startsCollapsed);
  const [delayedCollapsed, setDelayedCollapsed] = useState(startsCollapsed)
  const [childrenRef, childrenBounds] = useMeasure()
  const [headerRef, headerBounds] = useMeasure()
  const isAnimating = useRef(false);

  const onClick = () => {
    if (!isAnimating.current && canToggle) {
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
      {canToggle && <div
        style={{ height: '21px' }}
        className={`
            absolute m-auto bg-gray-100 transition-opacity -left-1.5 -right-1.5 -top-[2px] rounded
            ${delayedCollapsed ? 'opacity-0' : 'opacity-100'}
            ${hover ? 'opacity-100' : 'opacity-0'}
          `}
      />}
      <div className={`${animate ? 'transition-all' : 'transition-none'} relative duration-1000 ease-in-out overflow-hidden`}
        style={{ height: !collapsed ? totalHeight + 'px' : '19px' }}
      >
        {/* view as row */}
        {canToggle && (
          <button
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`
              relative z-10 grid grid-cols-4 w-full mb-8 transition-colors
              ${!delayedCollapsed ? 'bg-gray-100' : ''}
            `}>
            <div className={`text-left font-bold`}>
              {project.title}
            </div>
            <div className='text-left col-span-2'>
              <h3><span>{project.what}</span></h3>
            </div>
            <div className='text-right'>
              <h3><span>{project.date}</span></h3>
            </div>
          </button>
        )}
        {/* project details */}
        <div ref={headerRef} className='flex gap-2'>
          <div className='w-1/2 flex flex-col space-y-0.5'>
            {!canToggle && <h1 className={`pb-4 text-left font-bold`}>{project.title}</h1>}
            {project.fields && project.fields.map((field, index) => (
              <div key={index}>
                {/* Different field variations */}
                {field.url && field.value ? (
                  <div>
                    <span className='font-bold'>{field.title}</span>
                    &nbsp;
                    <a className='hover:underline' href={field.url} target="_blank" rel="noopener noreferrer">{field.value}</a>
                  </div>
                ) : (null)}
                {field.url && !field.value ? (
                  <a className='font-bold hover:underline' href={field.url} target="_blank" rel="noopener noreferrer">{field.title}</a>
                ) : null}
                {!field.url && field.value ? (
                  <div>
                    <span className='font-bold'>{field.title}</span>
                    &nbsp;
                    <span>{field.value}</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className={`flex gap-2 w-1/2`}>
            <div className='w-1/2'>
              <Markdown>{project.descriptionOne}</Markdown>
            </div>
            <div className='w-1/2'>
              <Markdown>{project.descriptionTwo}</Markdown>
            </div>
          </div>
        </div>
        <div
          className={`${animate ? 'transition-all' : 'transition-none'} duration-1000 ease-in-out overflow-hidden`}
          style={{ maxHeight: !collapsed ? totalHeight + 'px' : '0px' }}
        >
          <div ref={childrenRef}>
            <div className={`pt-12 ${canToggle ? 'pb-16' : 'pb-48'}`}>
              {children} {/* project carousel */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AccordionWrapper;