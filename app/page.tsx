import HomePageMain from "@/components/homepage/main";
import { getCollaborators, getShuffledSlides } from "@/sanity/lib/queries";

export default async function Home() {
  const [collaborators, slides] = await Promise.all([
    getCollaborators(),
    getShuffledSlides(),
  ]);

  return <HomePageMain collaborators={collaborators} initialSlides={slides} />;
}
