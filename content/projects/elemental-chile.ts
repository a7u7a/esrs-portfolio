import { IProject } from "@/lib/types";

const project: IProject = {
  id: "elemental",
  title: "Elemental Chile",
  type: "Elemental Website",
  what: "Next.js Web App",
  date: "2024",
  collapsed: true,
  link: {
    title: "Go",
    url: "https://elemental-web-prod.vercel.app/"
  },
  fields: [
    { title: "Stack", value: "Next.js, TypeScript, Sanity CMS" },
    { title: "Go", url: "https://elemental-web-prod.vercel.app/" }
  ],
  descriptionOne: `A super minimal site for Elemental Chile, led by [Pritzker](https://www.pritzkerprize.com/jury) prize winning architect Alejandro Aravena. They wanted something that felt like an internal tool - brutalist and early-internet inspired. The challenge was to showcase 200+ projects in a way that worked for stakeholder meetings.`,
  descriptionTwo: `The result is a custom app which syncs content from their internal database to a [Sanity](https://www.sanity.io/) backend, making it easy for them to keep the site updated. Coupled with a global search feature. Helping people discover connections across their diverse body of work.`,
  gallery: [
    {
      type: "video",
      alt: "Desktop nav",
      src: "/assets/elemental/elemental_desktop_nav_no_browser_handbrake_optimized.mp4",
      dims: { width: 706, height: 720 },
      bgColor:"#7C76A1"
    },
    {
      type: "video",
      alt: "Mobile nav",
      src: "/assets/elemental/elemental_mobile_no_browser_handbrake_optimized.mp4",
      dims: { width: 338, height: 720 },
      bgColor:"#7C76A1"
    }
  ]
};

export default project;