import Home from "@/components/Home";
import {
  getCollaborators,
  getShuffledSlides,
  getHomepageParagraphs,
  getEducation,
  getPublications,
  getServices,
  getSocials,
} from "@/sanity/lib/queries";

export default async function HomePage() {
  const [
    collaborators,
    slides,
    paragraphs,
    education,
    publications,
    services,
    socials,
  ] = await Promise.all([
    getCollaborators(),
    getShuffledSlides(),
    getHomepageParagraphs(),
    getEducation(),
    getPublications(),
    getServices(),
    getSocials(),
  ]);

  return (
    <Home
      collaborators={collaborators}
      initialSlides={slides}
      beforeParagraphs={paragraphs.before}
      afterParagraphs={paragraphs.after}
      education={education}
      publications={publications}
      services={services}
      socials={socials}
    />
  );
}
