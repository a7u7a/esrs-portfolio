"use client"
import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import { IProject } from '@/lib/types';
import ProjectHeader from './project-header';

interface AccordionItemProps {
  children: any
  project: IProject
}

const AccordionWrapper = ({ children, project }: AccordionItemProps) => {
  const [animate, setAnimate] = useState(false);
  const [showCollapsed, setShowCollapsed] = useState(project.collapsed ?? false);
  const canToggle = project.collapsed ?? false;
  const [collapsed, setCollapsed] = useState(project.collapsed ?? false);
  const [hover, setHover] = useState(false);
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
        setShowCollapsed(true);
        isAnimating.current = false;
      }, 750);
    } else {
      setShowCollapsed(false);
      timer = setTimeout(() => {
        isAnimating.current = false;
      }, 750);
    }
    return () => clearTimeout(timer);
  }, [collapsed])

  const totalHeight = headerBounds.height + childrenBounds.height

  return (
    <div className={`${animate ? 'transition-all' : 'transition-none'} relative duration-1000 ease-in-out overflow-hidden`}
      style={{ height: !collapsed ? totalHeight + 'px' : '20px' }}
    >

      <button
        className='absolute z-10'
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1 className='text-left font-bold hover:text-gray-500'>{project.title}</h1>
      </button>

      <div
        className={`
          absolute top-0 flex gap-2 w-full 
          transition-opacity ${showCollapsed ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className='w-1/4'></div>
        <div className='w-1/4'></div>
        <div className='w-1/4'></div>
        <div className='text-right w-1/4'>
          <span>Year</span>
          <span></span>
        </div>
      </div>

      <ProjectHeader ref={headerRef} project={project} collapsed={showCollapsed} />

      <div
        className={`${animate ? 'transition-all' : 'transition-none'} duration-1000 ease-in-out overflow-hidden`}
        style={{ maxHeight: !collapsed ? totalHeight + 'px' : '0px' }}
      >
        <div ref={childrenRef}>
          <div className='pb-28'>
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}


export default AccordionWrapper;