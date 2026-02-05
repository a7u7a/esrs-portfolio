import HomePage from "@/components/homepage/HomePage";
import { getCollaborators, getShuffledSlides } from "@/sanity/lib/queries";

export default async function Home() {
  const [collaborators, slides] = await Promise.all([
    getCollaborators(),
    getShuffledSlides(),
  ]);

  return <HomePage collaborators={collaborators} initialSlides={slides} />;
}
