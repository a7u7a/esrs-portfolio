import { IProject } from "@/lib/types";

export const project: IProject = {
  id: "bp",
  title: "BeigePill",
  date: "2024",
  type: "BeigePill Website",
  what: "Website",
  tags: [
    { label: "Website", url: "https://beigepill.com" },
  ],
  fields: [
    { title: "Design", value: "FutureCorp", url: "https://futurecorp.paris/" },
    { title: "Stack", value: "WebGL, GSAP, Next.js" },
    { title: "What?", value: "Website" },
    { title: "Go", url: "https://beigepill.com" }
  ],
  descriptionOne: `Implemented the design system for BeigePill's new website, designed by [FutureCorp](https://futurecorp.paris/). Starting from a simple concept and developing it into a performant, full-screen animation.`,
  descriptionTwo: `The current approach uses WebGL's [stencil buffer](https://en.wikipedia.org/wiki/Stencil_buffer) to create the mask and [GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) to control it. Enabling Beige Pill to present their work in line with their premium brand identity. Special thanks to [Jack Wild](https://isjackwild.com/) for his technical guidance.`,
  gallery: [
    {
      type: "video",
      alt: "Dot mask scroller demo, desktop",
      src: "/assets/beigepill/homescroller-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "Dot mask scroller demo, mobile",
      src: "/assets/beigepill/homescroller-mobile.mp4",
      dims: { width: 1920, height: 1080 }
    }
  ],
};

export default project;