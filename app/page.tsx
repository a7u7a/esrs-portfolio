import React, { useState, useRef, useEffect } from 'react'
import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import NavMenu from "@/components/navmenu";
import CV from "@/components/cv"
import Divider from "@/components/divider"
import SpinningLogo from "@/components/spinning-logo";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">

      <SpinningLogo />

      <Header />

      <div className='pb-[100px] md:pb-[200px] max-w-5xl mx-2 md:mx-8'>

        <div className="h-[10px] md:h-[30px] w-full" />

        <NavMenu />

        <section className="pt-12" id="selected">

          <ul className="pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {selectedProjects.map((project, i) => (
              <li key={i} className=''>
                <Project key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-12 sm:pt-36" id="experimental">
          <Divider title="Experimental Work" subtitle="What" />

          <ul className="pt-6 sm:pt-12 list-none flex flex-col gap-1 sm:gap-3">
            {experimentalProjects.map((project, i) => (
              <li key={i}>
                <Project key={i} project={project} />
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
