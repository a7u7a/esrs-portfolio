import { IProject } from "@/lib/types";

export const project: IProject = {
  title: "BeigePill Productions",
  date: "2024",
  fields: [
    { title: "Type", value: "Portfolio website" },
    { title: "Design", value: "FutureCorp", url: "https://futurecorp.paris/" },
    { title: "Stack", value: "WebGL, GSAP, Next.js, TypeScript, Mux API, Sanity CMS" },
    { title: "Visit", url: "https://beigepill.com" },
  ],
  descriptionOne: `A custom dot mask effect was developed for BeigePill's new website, evolving from a simple concept into a high-performance, full-screen animation. Multiple iterations were necessary to achieve the desired smoothness.`,
  descriptionTwo: `The final solution uses WebGL's stencil buffer to create the mask and GSAP to control it. Enabling Beige Pill to present their work in line with their premium brand identity. Special thanks to Jack Wild for his invaluable technical guidance.`,
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