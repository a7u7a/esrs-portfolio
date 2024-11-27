"use client"
import React, { useEffect, useState, useCallback } from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Project from "./project";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import CV from "./cv"
import Divider from "./divider"
import SpinningLogo from "@/components/spinning-logo";
import { useRotationSpeed, useScrollProgress } from '@/lib/hooks';
import { useSearchParams, useRouter } from 'next/navigation';
import { IProject } from '@/lib/types';

function removeHiddenProjects(projects: IProject[]) {
  return projects.filter(project => !project.hidden)
}

const WorkPageMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [allProjects, setAllProjects] = useState(removeHiddenProjects([...experimentalProjects, ...selectedProjects]));
  const [selected, setSelected] = useState(removeHiddenProjects(selectedProjects));
  const [experimental, setExperimental] = useState(removeHiddenProjects(experimentalProjects));
  const { container, scrollProgress, scrollToElement } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress)
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [selectedOpen, setSelectedOpen] = useState(false);
  const [experimentalOpen, setExperimentalOpen] = useState(false);

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
    scrollToElement('#cv');
  }

  const handleExpandSelected = () => {
    // Get current experimental IDs that are expanded
    const currentExperimentalIds = expandedIds.filter(id =>
      experimental.map(project => project.id).includes(id)
    );
    // Add all selected IDs while preserving experimental ones
    const selectedIds = selected.map(project => project.id);
    const newIds = [...new Set([...currentExperimentalIds, ...selectedIds])];
    setExpandedIds(newIds);
    updateURL(newIds);
  }

  const handleCollapseSelected = () => {
    setExpandedIds(prevIds => prevIds.filter(id => !selected.map(project => project.id).includes(id)));
    updateURL(expandedIds.filter(id => !selected.map(project => project.id).includes(id)));
  }

  const handleExpandExperimental = () => {
    const currentSelectedIds = expandedIds.filter(id =>
      selected.map(project => project.id).includes(id)
    );
    const experimentalIds = experimental.map(project => project.id);
    const newIds = [...new Set([...currentSelectedIds, ...experimentalIds])];
    setExpandedIds(newIds);
    updateURL(newIds);
  }

  const handleCollapseExperimental = () => {
    setExpandedIds(prevIds => prevIds.filter(id => !experimental.map(project => project.id).includes(id)));
    updateURL(expandedIds.filter(id => !experimental.map(project => project.id).includes(id)));
  }

  useEffect(() => {
    const expandedExperimental = expandedIds.filter(id => experimental.map(project => project.id).includes(id));
    setExperimentalOpen(expandedExperimental.length > 0);
  }, [expandedIds, experimental])

  useEffect(() => {
    const expandedSelected = expandedIds.filter(id => selected.map(project => project.id).includes(id));
    setSelectedOpen(expandedSelected.length > 0);
  }, [expandedIds, selected])

  return (
    <main ref={container} className="flex flex-col items-start pt-40 md:pt-48">
      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />

      <div className='pb-24 md:pb-52 max-w-6xl mx-3 md:mx-4 relative'>
        <h1 className='font-semibold'>{"Esteban Serrano"}</h1>
        <div className='pt-20 w-full sm:w-2/3 text-balance'>
          <p>{"I'm a design technologist and web developer bridging the gap between design and code to craft exceptional digital experiences. I help brands, cultural institutions, and agencies develop custom solutions and non-default interfaces, from interactive installations to data visualizations and cloud-based applications. Through close collaboration and strategic technology choices, I transform complex technical challenges into elegant, user-centered solutions that deliver immediate value."}</p>
          <div className='pt-6'>
            <p>{"Here you'll find samples of client work and experiments that showcase some of the problems I've worked on and the tools I typically use."}</p>
          </div>
        </div>

        <div className='flex justify-between items-center pt-20 pb-20'>
          <nav className='flex gap-4'>
            <NavButton>{"Portfolio"}</NavButton>
            <NavButton className='text-esrs-hover hover:text-esrs-black' onClick={scrollToCV}>{"CV"}</NavButton>
          </nav>
        </div>

        <section id="selected">
          <Divider title="Selected Work" subtitle="Info" handleOpen={handleExpandSelected} handleClose={handleCollapseSelected} expanded={selectedOpen} />
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
          <Divider title="Experimental Work" handleOpen={handleExpandExperimental} handleClose={handleCollapseExperimental} expanded={experimentalOpen} />
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