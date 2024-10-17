import { IProject } from "@/lib/types";

const project: IProject = {
  title: "PESE.works",
  what: "Scroll-based 3D interactions",
  date: "2022",
  collapsed: true,
  fields: [
    { title: "Type", value: "Portfolio site" },
    { title: "Stack", value: "React-Three-Fiber, TypeScript, WebGL, Next.js." },
    { title: "Visit", url: "https://pese.works/" },
  ],
  descriptionOne: `For this site we repurposed a model Pedro created for an exhibition project in Berlin. There was something interesting between the sterile view of the simulation and the photos of the real world objects he wanted to show.`,
  descriptionTwo: `I had to make this [little tool](https://pese.works/?debug=true) to help me find the right animation parameters for making the little scroll-dance between lights, camera and 🌷.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/peseworks/peseworks.mp4",
      dims: { width: 1920, height: 1080 }
    }
  ]
};

export default project;