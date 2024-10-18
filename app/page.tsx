import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import NavMenu from "@/components/navmenu";
import CV from "@/components/cv"
import Divider from "@/components/divider"
import Logo from "@/components/logo";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">

          <div className="fixed w-full flex items-center justify-end z-50" >
            <div className="w-16 pt-4 pr-4 z-50">
              <Logo />
            </div>
          </div>

      <Header />

      <div className='pb-[100px] md:pb-[200px] max-w-5xl mx-2'>
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
