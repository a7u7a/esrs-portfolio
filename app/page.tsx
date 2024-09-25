import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content'
import NavMenu from "@/components/navmenu";
import Logo from "@/components/logo";

export default async function Home() {
  return (
    <main className="text-[12px] flex flex-col items-center ">

      {/* <div className="fixed w-full flex items-center justify-end" >
        <div className="w-[100px] h-[100px]">
          <Logo />
        </div>
      </div> */}
      
      <Header />
      <div className='pb-[400px] max-w-5xl mx-8'>
        <div className="pt-24">
          <NavMenu />
        </div>
        <div className="pt-36 flex flex-col">
          {selectedProjects.map((project, i) => (
            <div key={i} className=''>
              <Project key={i} project={project} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 w-full font-bold">
          <h2>Experimental Work</h2>
          <h2 className='col-span-2'>What</h2>
          <h2 className=' text-right'>Date</h2>
        </div>

        <div className="pt-12 flex flex-col gap-1">
          {experimentalProjects.map((project, i) => (
            <div key={i} className=''>
              <Project key={i} project={project} />
            </div>
          ))}
        </div>
      </div >
    </main>
  );
}
