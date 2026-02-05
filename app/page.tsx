import Home from "@/components/homepage/Home";
import { getCollaborators, getShuffledSlides } from "@/sanity/lib/queries";

export default async function HomePage() {
  const [collaborators, slides] = await Promise.all([
    getCollaborators(),
    getShuffledSlides(),
  ]);

  return <Home collaborators={collaborators} initialSlides={slides} />;
}
