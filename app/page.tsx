import Project from "@/components/project";
import Header from "@/components/header";
import { projects } from '@/content'
import NavMenu from "@/components/navmenu";
import SampleAccordion from "@/components/sample-accordion";

export default async function Home() {
  return (
    <main className="text-[12px] flex flex-col items-center">
      <Header />
      <div className='pt-12 pb-[400px] max-w-5xl mx-8'>
        <NavMenu />
        {projects.map((project, i) => (
          <div key={i} className='pt-28'>
            <Project key={i} project={project} />
          </div>
        ))}

        <SampleAccordion />
      </div >
    </main>
  );
}
