import { IGalleryItem } from "@/lib/types";
const slidesPath = "/assets/slides";

export const shuffledSlides = () => {
  const shuffled = slides.sort(() => 0.5 - Math.random());
  // const shuffled = slides
  return shuffled;
}

const slides: IGalleryItem[] = [
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/instalacion.jpg`,
    dims: { width: 1280, height: 1920 }
  },
  {
    id: "fringeless",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/fl.jpg`,
    dims: { width: 3500, height: 1968 }
  },
  {
    id: "bp",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/bp_desk.mp4`,
    dims: { width: 1728, height: 1080 }
  },
  {
    id: "bp",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/bp_mob.mp4`,
    dims: { width: 572, height: 1080 }
  },
  {
    id: "boids",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/boids-sim.mp4`,
    dims: { width: 1920, height: 1080 }
  },
  {
    id: "boids",
    type: "video",
    projectTypeOverride: "Process",
    alt: "alt",
    src: `${slidesPath}/boids-pro.mp4`,
    dims: { width: 600, height: 600 }
  },
  {
    hideMore: true,
    projectTypeOverride: "Process",
    id: "cata",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata_pro.mp4`,
    dims: { width: 600, height: 600 }
  },
  {
    id: "cata",
    type: "video",
    projectTypeOverride: "Process",
    hideMore: true,
    alt: "alt",
    src: `${slidesPath}/cata_pro2.mp4`,
    dims: { width: 748, height: 1080 }
  },
  {
    id: "cata",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cataandonie-desktop.mp4`,
    dims: { width: 1920, height: 1080 }
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_desk.mp4`,
    dims: { width: 1000, height: 1080 }
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_mob.mp4`,
    dims: { width: 500, height: 1000 }
  },
  {
    id: "pf",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/fp-anim.mp4`,
    dims: { width: 1920, height: 1080 }
  },
  {
    id: "energy",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/ci-cover.jpg`,
    dims: { width: 3186, height: 3868 }
  },
  {
    id: "energy",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/ci-render.jpg`,
    dims: { width: 3226, height: 3898 }
  },
  {
    id: "bloko",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/interrupt.png`,
    dims: { width: 3500, height: 1969 }
  },
  {
    id: "pese",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/peseworks.mp4`,
    dims: { width: 1920, height: 1080 }
  },
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/controller.jpg`,
    dims: { width: 1280, height: 853 }
  },
  {
    id: "cata",
    projectTypeOverride: "Process",
    hideMore: true,
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata-bg.mp4`,
    dims: { width: 600, height: 1080 }
  },
  {
    id: "pf",
    type: "image",
    projectTypeOverride: "Documentation",
    alt: "alt",
    src: `${slidesPath}/tecnica.jpg`,
    dims: { width: 1920, height: 1280 }
  },
  {
    id: "bloko",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/ticker2.mp4`,
    dims: { width: 1920, height: 1080 }
  },
];

