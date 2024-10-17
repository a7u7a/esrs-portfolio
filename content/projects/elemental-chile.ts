import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Elemental Chile",
  date: "2024",
  collapsed: false,
  fields: [
    { title: "Type", value: "Web App" },
    { title: "Design", value: "Client co-design" },
    { title: "Stack", value: "Next.js, Tailwind, Sanity CMS, Vercel, TypeScript" },
    { title: "Visit", url: "https://elementalchile.cl" },
  ],
  descriptionOne: `A super minimal site for Elemental Chile, led by [Pritzker](https://www.pritzkerprize.com/jury) prize winning architect Alejandro Aravena. They wanted something that felt like an internal tool - brutalist and early-internet inspired. The challenge was to showcase 200+ projects in a way that worked for stakeholder meetings.`,
  descriptionTwo: `The result is a custom app which syncs content from their internal database to a [Sanity](https://www.sanity.io/) backend, making it easy for them to keep the site updated. Coupled with a global search feature. Helping people discover connections across their diverse body of work.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/elemental/elemental-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/elemental/elemental-mobile.mp4",
      dims: { width: 1920, height: 1080 }
    }
  ]
};

export default project;