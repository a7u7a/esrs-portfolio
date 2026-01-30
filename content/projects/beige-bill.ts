import { IProject } from "@/lib/types";

export const project: IProject = {
  id: "bp",
  collapsed: false,
  title: "BeigePill Productions",
  date: "2024",
  type: "BeigePill Website",
  what: "Next.js Site",
  tags: [
    { label: "Website", url: "https://beigepill.com" },
  ],
  fields: [
    { title: "Design", value: "FutureCorp", url: "https://futurecorp.paris/" },
    { title: "Stack", value: "WebGL, GSAP, Next.js, Sanity CMS, MUX API" },
    { title: "Visit", url: "https://beigepill.com" }
  ],
  descriptionOne: `I was tasked with building the design system for BeigePill's new website, designed by [FutureCorp](https://futurecorp.paris/). Starting from a simple concept and developing it into a performant, full-screen animation.`,
  descriptionTwo: `The current approach uses WebGL's [stencil buffer](https://en.wikipedia.org/wiki/Stencil_buffer) to create the mask and [GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) to control it. Enabling Beige Pill to present their work in line with their premium brand identity. Special thanks to [Jack Wild](https://isjackwild.com/) for his technical guidance.`,
  gallery: [
    {
      type: "image",
      alt: "BeigePill website",
      src: "/assets/beigepill/covernew_opt.png",
      dims: { width: 3200, height: 1677 },
      bgColor:"#d8d8d8"
    },
    {
      type: "video",
      alt: "Scroll mask demo, loop",
      src: "/assets/beigepill/desktop_mask_loop_handbrake_optimized.mp4",
      dims: { width: 1280, height: 720 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Desktop hp scroll",
      src: "/assets/beigepill/desktop_hp_scroll_handbrake_optimized.mp4",
      dims: { width: 1152, height: 720 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Mobile hp scroll",
      src: "/assets/beigepill/mobile_hp_scroll_handbrake_optimized.mp4",
      dims: { width: 382, height: 680 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Desktop works scroll",
      src: "/assets/beigepill/desktop_works_scroll_handbrake_optimized.mp4",
      dims: { width: 1152, height: 720 },
      bgColor:"#D9D9D9"
    }
  ],
};

export default project;