"use client";
import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { ISanityProject } from "@/lib/types";
import Markdown from "react-markdown";
import AccordionFields from "./accordion-fields";

interface AccordionItemProps {
  children: any;
  project: ISanityProject;
  onToggle?: () => void;
  isExpanded: boolean;
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

const AccordionWrapper = ({
  children,
  project,
  onToggle,
  isExpanded,
}: AccordionItemProps) => {
  const [animate, setAnimate] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hover, setHover] = useState(false);
  const [childrenRef, childrenBounds] = useMeasure();
  const [headerRef, headerBounds] = useMeasure();

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animate) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const totalHeight = headerBounds.height + childrenBounds.height;

  return (
    <div className="relative">
      <div
        className={`
            mt-[3px]
            absolute -z-10 
            inset-0 sm:h-[25px]
            -left-[4px]
            -right-[4px]
            rounded-[3px]
            transition-opacity duration-200 ease-in-out
            bg-esrs-gray
            ${isExpanded || isAnimating ? "opacity-100" : "opacity-0"}
            ${hover ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`
      relative
      overflow-hidden
      duration-1000 ease-in-out 
      ${animate ? "transition-all" : "transition-none"} 
       `}
        style={{ height: isExpanded ? totalHeight + "px" : "25px" }}
      >
        {/* Click row title to expand */}

        <button
          onClick={onToggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`
              flex justify-between sm:grid sm:grid-cols-4 
              mb-8 mt-[4px] 
              w-full 
              transition-colors duration-100 ease-in-out
            `}
        >
          <div className={`text-left w-1/2 sm:w-full`}>
            <span
              className={`
              text-esrs-text 
              ${hover ? " " : ""}`}
            >
              {project.title}
            </span>
          </div>
          <div className="hidden sm:block text-left col-span-2">
            <h3>
              <span>{project.what}</span>
            </h3>
          </div>
          <div className="text-right">
            <h3>
              <span>{project.date}</span>
            </h3>
          </div>
        </button>

        {/* project details */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row gap-3 justify-between"
        >
          <AccordionFields project={project} />
          <CopyTwoCols project={project} />
        </div>

        <div ref={childrenRef}>
          <div className={"pt-4 pb-28"}>
            {/* project carousel */}
            {children}

            <CopyOneCol project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionWrapper;

interface CopyProps {
  project: ISanityProject;
}

const CopyTwoCols = ({ project }: CopyProps) => {
  return (
    <div
      className={`hidden sm:flex flex-row w-2/3 gap-3 text-pretty prose-a:underline hover:prose-a:text-esrs-blue`}
    >
      <div className="w-1/2">
        <Markdown components={{ a: LinkRenderer }}>
          {project.descriptionOne}
        </Markdown>
      </div>
      <div className="w-1/2">
        <Markdown components={{ a: LinkRenderer }}>
          {project.descriptionTwo}
        </Markdown>
      </div>
    </div>
  );
};

const CopyOneCol = ({ project }: CopyProps) => {
  return (
    <div
      className={`block sm:hidden pt-3 w-full gap-3 text-pretty prose-a:underline hover:prose-a:text-esrs-blue`}
    >
      <Markdown components={{ a: LinkRenderer }}>
        {project.descriptionOne}
      </Markdown>
      <Markdown components={{ a: LinkRenderer }}>
        {project.descriptionTwo}
      </Markdown>
    </div>
  );
};
