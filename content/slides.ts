import { IGalleryItem } from "@/lib/types";
const slidesPath = "/assets/slides";

export const shuffledSlides = () => {
  const shuffled = slides.sort(() => 0.5 - Math.random());
  return shuffled;
}

const slides: IGalleryItem[] = [
  {
    id: "bp",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/bp_desk.mp4`,
  },
  {
    id: "bp",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/bp_mob.mp4`,
  },
  {
    id: "boids",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/boids-sim.mp4`,
  },
  {
    
    hideMore: true,
    projectTypeOverride: "Experiment",
    id: "cata",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata_pro.mp4`,
  },
  {
   
    id: "cata",
    type: "video",
    projectTypeOverride: "Experiment",
    hideMore: true,
    alt: "alt",
    src: `${slidesPath}/cata_pro2.mp4`,
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_desk.mp4`,
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_mob.mp4`,
  },
  {
    id: "pf",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/fp-anim.mp4`,
  },
  {
    id: "energy",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/ci-cover.jpg`,
  },
  {
    id: "energy",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/ci-render.jpg`,
  },
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/instalacion.jpg`,
  },
  {
    id: "fringeless",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/fl.jpg`,
  },
  {
    id: "bloko",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/interrupt.png`,
  },
  {
    id: "pese",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/peseworks.mp4`,
  },
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/controller.jpg`,
  },
  {
    id: "cata",
    projectTypeOverride: "Experiment",
    hideMore: true,
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata-bg.mp4`,
  },
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/tecnica.jpg`,
  },
  {
    id: "bloko",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/ticker2.mp4`,
  },
];

