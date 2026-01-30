import { IProject } from "@/lib/types";

const project: IProject = {
  id: "pese",
  title: "PESE.works",
  what: "Three.js + React Site",
  type: "Portfolio website",
  date: "2022",
  collapsed: false,
  fields: [
    { title: "Stack", value: "R3F, TypeScript, Next.js." },
    { title: "Type", value: "Portfolio site" },
    { title: "Visit", url: "https://pese.works/" }
  ],
  descriptionOne: `For this site we repurposed a model Pedro created for an exhibition project in Berlin. There was something interesting between the sterile view of the simulation and the photos of the real world objects he wanted to show.`,
  descriptionTwo: `I had to make this [little tool](https://pese.works/?debug=true) to help me find the right animation parameters for making the little scroll-dance between lights, camera and 🌷`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/peseworks/peseworks.mp4",
      dims: { width: 1920, height: 1080 },
      bgColor: "black"
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/peseworks/pese-easteregg-desktop.mp4",
      dims: { width: 1152, height: 720 },
      bgColor: "black"
    }
  ]
};

export default project;