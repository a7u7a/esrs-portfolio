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
  descriptionOne: `Created this dynamic dot mask animation for BeigePill Production's new site. While it started as a simple concept, achieving smooth, high-performance, full screen animations across devices required ton of optimization.`,
  descriptionTwo: `Eventually, we settled for a low-level solution based on WebGL's stencil buffer. The result helps Beige Pill showcase their work in a way that resonates with their premium brand positioning. Thanks to [Jack Wild](https://www.isjackwild.com/) for his technical advice.`,
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