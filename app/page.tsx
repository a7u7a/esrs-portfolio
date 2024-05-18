import Image from "next/image";
import { IProjectData } from "@/lib/types";
import { works, plays } from "@/lib/utils";
import ProjectViewer from "@/components/project-viewer";

export default function Home() {
  return (
    <main>
      {works.map((work, i) => (
        <ProjectViewer key={i} projectData={work as IProjectData} />
      ))}
      {plays.map((play, i) => (
        <ProjectViewer key={i} projectData={play as IProjectData} />
      ))}
    </main>
  );
}
