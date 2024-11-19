"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Project from "./project";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import CV from "./cv"
import Divider from "./divider"
import SpinningLogo from "@/components/spinning-logo";
import { useRotationSpeed, useScrollProgress } from '@/lib/hooks';
import { useSearchParams, useRouter } from 'next/navigation';
import { IProject } from '@/lib/types';
import { Plus, Minus } from '@phosphor-icons/react';

function removeHiddenProjects(projects: IProject[]) {
  return projects.filter(project => !project.hidden)
}

const WorkPageMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [allProjects, setAllProjects] = useState(removeHiddenProjects([...experimentalProjects, ...selectedProjects]));
  const [selected, setSelected] = useState(removeHiddenProjects(selectedProjects));
  const [experimental, setExperimental] = useState(removeHiddenProjects(experimentalProjects));
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress)
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    const expanded = searchParams.get('p');
    let initialIds = []
    if (expanded) {
      initialIds = expanded.split(',')
    } else {
      initialIds = allProjects.filter(project => !project.collapsed).map(project => project.id)
    }
    setExpandedIds(initialIds);

    const firstId = initialIds[0];
    // Smooth scroll to the first id in initialIds, when url param is present
    if (firstId && expanded) {
      // Wait for the DOM to update with expanded accordions
      setTimeout(() => {
        const element = document.getElementById(firstId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Ensure accordion has expanded
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateURL = useCallback((ids: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (ids.length > 0) {
      params.set('p', ids.join(','));
    } else {
      params.delete('p');
    }

    setTimeout(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 0);
  }, [router, searchParams]);

  // Handler for individual accordion clicks
  const handleAccordionToggle = useCallback((projectId: string) => {
    setExpandedIds(prevIds => {
      const newIds = prevIds.includes(projectId)
        ? prevIds.filter(id => id !== projectId)
        : [...prevIds, projectId];

      // Update URL after state change
      updateURL(newIds);
      return newIds;
    });
  }, [updateURL]);

  useEffect(() => {
    // Sync with URL changes (for back/forward navigation)
    const expanded = searchParams.get('p');
    const urlIds = expanded ? expanded.split(',') : [];

    // Only update if the IDs are different to avoid loops
    if (JSON.stringify(urlIds) !== JSON.stringify(expandedIds)) {
      setExpandedIds(urlIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const scrollToCV = () => {
    const element = document.getElementById('cv');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const handleCloseAll = () => {
    setExpandedIds([]);
    updateURL([]);
  }

  const handleOpenAll = () => {
    const allIds = allProjects.map(project => project.id);
    setExpandedIds(allIds);
    updateURL(allIds);
  }

  return (
    <main ref={container} className="flex flex-col items-start pt-40 md:pt-48">
      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />

      <div className='pb-24 md:pb-52 max-w-6xl mx-3 md:mx-4 relative'>
        <div>
          <h1 className='font-semibold'>{"Esteban Serrano"}</h1>
          <div className='pt-20 max-w-prose'>
            <p>{"I'm a design technologist and web developer bridging the gap between design and code to craft exceptional digital experiences. I help brands, cultural institutions, and agencies develop custom solutions and non-default interfaces, from interactive installations to data visualizations and cloud-based applications. Through close collaboration and strategic technology choices, I transform complex technical challenges into elegant, user-centered solutions that deliver immediate value."}</p>
          </div>
          <div className='flex justify-between items-center pt-4 pb-20'>
            <nav className='flex gap-4'>
              <NavButton>{"Portfolio"}</NavButton>
              <NavButton className='text-esrs-hover hover:text-esrs-black' onClick={scrollToCV}>{"CV"}</NavButton>
            </nav>
            <div className='relative flex '>
              {expandedIds.length > 0 ?
                <button aria-label="Close all" onClick={handleCloseAll} ><Minus size={24} /></button>
                :
                <button aria-label="Open all" onClick={handleOpenAll} ><Plus size={24} /></button>}
            </div>
          </div>
        </div>

        <section id="selected">
          <Divider title="Selected Work" subtitle="Info" showDate />
          <ProjectList>
            {selected.map((project, i) => (
              <li key={i} id={project.id}>
                <Project
                  onToggle={() => handleAccordionToggle(project.id)}
                  isExpanded={expandedIds.includes(project.id)}
                  project={project}
                />
              </li>
            ))}
          </ProjectList>
        </section>

        <section className="pt-20 pb-20" id="experimental">
          <Divider title="Experimental Work" />
          <ProjectList>
            {experimental.map((project, i) => (
              <li key={i} id={project.id}>
                <Project
                  onToggle={() => handleAccordionToggle(project.id)}
                  isExpanded={expandedIds.includes(project.id)}
                  project={project}
                />
              </li>
            ))}
          </ProjectList>
        </section>

        <section className="" id="cv">
          <CV />
        </section>

      </div >
    </main>
  );
}

export default WorkPageMain

const ProjectList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col gap-1 sm:gap-2 pt-12 list-none">
      {children}
    </ul>
  )
}

const NavButton = ({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
  return (
    <button onClick={onClick} className={className} >
      <h2 className='font-semibold '>
        {children}
      </h2>
    </button>
  )
}