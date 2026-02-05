import Home from "@/components/Home";
import {
  getCollaborators,
  getShuffledSlides,
  getHomepageParagraphs,
} from "@/sanity/lib/queries";

export default async function HomePage() {
  const [collaborators, slides, paragraphs] = await Promise.all([
    getCollaborators(),
    getShuffledSlides(),
    getHomepageParagraphs(),
  ]);

  return (
    <Home
      collaborators={collaborators}
      initialSlides={slides}
      beforeParagraphs={paragraphs.before}
      afterParagraphs={paragraphs.after}
    />
  );
}
