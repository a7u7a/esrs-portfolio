"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react'
import Project from "./project";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import CV from "./cv"
import Divider from "./divider"
import SpinningLogo from "@/components/spinning-logo";
import { useRotationSpeed, useScrollProgress } from '@/lib/hooks';
import { useSearchParams, useRouter } from 'next/navigation';

const Main = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [allProjects, setAllProjects] = useState([...experimentalProjects, ...selectedProjects]);
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress)
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    const expanded = searchParams.get('expanded');
    let initialIds = []
    if (expanded) {
      initialIds = expanded.split(',')
    } else {
      initialIds = allProjects.filter(project => !project.collapsed).map(project => project.id)
    }
    setExpandedIds(initialIds);

    // smooth scroll to the first id in initialIds
    const firstId = initialIds[0];
    if (firstId) {
      // Wait for the DOM to update with expanded accordions
      setTimeout(() => {
        console.log("Scrolling to", firstId);
        const element = document.getElementById(firstId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Small delay to ensure accordion has expanded
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateURL = useCallback((ids: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (ids.length > 0) {
      params.set('expanded', ids.join(','));
    } else {
      params.delete('expanded');
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
    const expanded = searchParams.get('expanded');
    const urlIds = expanded ? expanded.split(',') : [];

    // Only update if the IDs are different to avoid loops
    if (JSON.stringify(urlIds) !== JSON.stringify(expandedIds)) {
      setExpandedIds(urlIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <main ref={container} className="flex flex-col items-center bg-white">

      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />

      <div className='pb-[100px] md:pb-[200px] max-w-5xl mx-3 md:mx-8'>
        <div className="h-[10px] md:h-[25px] w-full" />

        <section className="pt-12" id="selected">
          <Divider title="Esteban Serrano - Selected Work" />
          <ul className="pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {selectedProjects.map((project, i) => (
              <li key={i} id={project.id}>
                <Project
                  onToggle={() => handleAccordionToggle(project.id)}
                  isExpanded={expandedIds.includes(project.id)}
                  project={project}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-12 sm:pt-36" id="experimental">
          <Divider title="Experimental Work" subtitle="What" />
          <ul className="pt-6 sm:pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {experimentalProjects.map((project, i) => (
              <li key={i} id={project.id}>
                <Project
                  onToggle={() => handleAccordionToggle(project.id)}
                  isExpanded={expandedIds.includes(project.id)}
                  project={project}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-12 sm:pt-36">
          <CV />
        </section>

      </div >
    </main>
  );
}


export default Main