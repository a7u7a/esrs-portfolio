import { getAllProjects } from "@/lib/utils";
import RenderProject from "@/components/render-project";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main>
      {projects.map((project, i) => (
        <RenderProject key={i} project={project} />
        ))}
    </main>
  );
}
