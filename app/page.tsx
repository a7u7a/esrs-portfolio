import Image from "next/image";
import { works, plays } from "@/lib/utils";
import ProjectViewer from "@/components/project-viewer";

export default function Home() {
  return (
    <main>
      {works.map((work, i) => (
        <ProjectViewer key={i} projectData={work} />
      ))}
      {plays.map((play, i) => (
        <ProjectViewer key={i} projectData={play} />
      ))}
    </main>
  );
}
