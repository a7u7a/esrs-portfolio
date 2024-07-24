import Head from 'next/head'
import { getAllProjects } from "@/lib/utils";
import RenderProject from "@/components/render-project";
import Header from "@/components/header";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="text-[12px]">
      <Header />
      <div className='py-[40px] mx-[160px]'>
        <nav className="flex gap-2">
          <section>Selected projects</section>
          <section>Publications</section>
          <section>Clients</section>
          <section>Services</section>
          <section>Contact</section>
        </nav>
        {projects.map((project, i) => (
          <RenderProject key={i} project={project} />
        ))}
      </div >
    </main>
  );
}
