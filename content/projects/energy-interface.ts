import { IProject } from "@/lib/types";

const project: IProject = {
  id: "energy",
  type: "Research",
  title: "Comfortable Interactions",
  collapsed: true,
  what: "Python, User Research",
  fields: [
    { title: "Tools", value: "E-paper display, Raspberry Pi, Python, P5.js" },
    { title: "What?", value: "Alternative interfaces for energy efficiency" }
  ],
  date: "2019",
  descriptionOne: `Can buildings use natural language to explain what it's doing to keep you warm during winter? Can it give you strategies to make yourself comfortable?`,
  descriptionTwo: `In this project I used [HCI research methods](https://www.interaction-design.org/literature/topics/human-computer-interaction) to develop and evaluate an interface which lets users communicate with buildings with the goal of improving comfort and lowering energy use. Referencing the interesting work of Stewart Brand, Adrian Clear and Elizabeth Shove.`,
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-cover.jpg",
      dims: { width: 1493, height: 1968 },
      bgColor: "#D9D9D9"
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-render.jpg",
      dims: { width: 3500, height: 1968 },
      bgColor: "black"
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-perspective.jpg",
      dims: { width: 3500, height: 1968 },
      bgColor: "#D9D9D9"
    },
  ]
};

export default project;