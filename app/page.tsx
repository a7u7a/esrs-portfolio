import Head from 'next/head'
import { getAllProjects } from "@/lib/utils";
import RenderProject from "@/components/render-project";
import Header from "@/components/header";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="text-[12px] flex flex-col items-center">
      <Header />
      <div className='pt-12 pb-[400px] max-w-5xl mx-8'>
        <nav className="flex gap-8 w-max" >
          <section>Selected Projects</section>
          <section>Experimental Work</section>
          <section>Publications</section>
          <section>Clients</section>
          <section>Services</section>
          <section>Contact</section>
        </nav>
        {projects.map((project, i) => (
          <div key={i} className='pt-12'>
            <RenderProject key={i} project={project} />
          </div>
        ))}
      </div >
    </main>
  );
}
