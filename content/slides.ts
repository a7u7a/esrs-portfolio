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
    id: "bp",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/covernew_opt.png`,
    dims: { width: 3200, height: 1677 }
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
    alt: "alt",
    src: `${slidesPath}/boids-pro.mp4`,
    dims: { width: 600, height: 600 }
  },
  {
    id: "cata",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata_pro.mp4`,
    dims: { width: 600, height: 600 }
  },
  {
    id: "cata",
    type: "video",

    alt: "alt",
    src: `${slidesPath}/cata_pro2.mp4`,
    dims: { width: 748, height: 1080 }
  },
  {
    id: "cata",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/catalinaandonie_no_browser_handbrake_optimized.mp4`,
    dims: { width: 1152, height: 720 }
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_desktop_nav_no_browser_handbrake_optimized.mp4`,
    dims: { width: 706, height: 720 }
  },
  {
    id: "elemental",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/elemental_mobile_no_browser_handbrake_optimized.mp4`,
    dims: { width: 338, height: 720 }
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
    type: "video",
    alt: "alt",
    src: `${slidesPath}/cata-bg.mp4`,
    dims: { width: 600, height: 1080 }
  },
  {
    id: "pf",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/TECHNICS-02.jpg`,
    dims: { width: 1362, height: 1200 }
  },
  {
    id: "bloko",
    type: "video",
    alt: "alt",
    src: `${slidesPath}/ticker2.mp4`,
    dims: { width: 1920, height: 1080 }
  },
  {
    id: "onditasensible",
    type: "video",
    alt: "Ondita Sensible",
    src: `${slidesPath}/seleccion_handbrake_optimized.mp4`,
    dims: { width: 636, height: 720 },
    hideCaption: true
  },
  {
    id: "energy",
    type: "image",
    alt: "alt",
    src: `${slidesPath}/test.jpg`,
    dims: { width: 2800, height: 1000 }
  },
];

