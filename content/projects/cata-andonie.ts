import { IProject } from "@/lib/types";

export const project: IProject = {
  id: "cata",
  title: "Catalina Andonie Portfolio",
  type: "Catalina Andonie",
  collapsed: true,
  what: "Fullscreen fragment shaders for a portfolio site",
  fields: [
    { title: "Stack", value: "Next.js, TypeScript, WebGL" },
    { title: "What?", value: "Portfolio site" },
    { title: "Go", url: "https://catalinaandonie.com/" },
  ],
  date: "2022",
  descriptionOne: `There's a lot of glass and refracting materials in Catalina's work. It seemed like a good opportunity for exploring what could be achieved using fragment shaders on the web.`,
  descriptionTwo: `Projects like these keep you humble by teaching you that it's one thing to get a cool result by experimentation, but aiming for a specific output is a very different task. Thankfully we have [TBoS](http://www.thebookofshaders.com/).`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/catalinaandonie/cataandonie-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
  ]
};

export default project;