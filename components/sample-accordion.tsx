"use client"
import React, { useState } from 'react';
import ImageSlide from './carousel/image-slide';
import useMeasure from 'react-use-measure'
import beigePill from '@/content/beige-bill'
import blokisScroller from '@/content/blokis-scroller'
import Project from './project';
interface AccordionItemProps {
  // title: string
  // content: string
  // src: string
  children: any
  collapsed?: boolean
}

const AccordionItem = ({ children, collapsed = false }: AccordionItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const handleClick = () => setIsCollapsed((prev) => !prev)
  const [ref, refBounds] = useMeasure()
  return (
    <div>
      <button
        className="grid grid-cols-3 w-full p-4 text-left bg-white hover:bg-gray-50"
        onClick={handleClick}
      >
        <span className="font-medium">{"Title"}</span>

        <div className='flex justify-center'>
          <span>Year</span>
        </div>

        <div className='flex justify-end'>
          <svg
            className={`w-4 h-4 transition-transform duration-700 ${!isCollapsed ? 'transform rotate-180' : ''
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </button>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden`}
        style={{ maxHeight: !isCollapsed ? refBounds.height + 'px' : '0px' }}
      >
        <div ref={ref}>
          {/* <div className="p-4">{content}</div>
          <ImageSlide slide={{ src, alt: "henlo" }} /> */}
          {children}
        </div>
      </div>

    </div>)
}

const AccordeonWrapper = () => {

  return (
    <div className='flex flex-col space-y-1'>

      {/* {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          src={item.image.src}
        />
      ))} */}

      <AccordionItem collapsed={blokisScroller.collapsed}>
        <Project project={blokisScroller} />
      </AccordionItem>

    </div>
  );
};

export default AccordeonWrapper;