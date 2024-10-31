import { IProject } from "@/lib/types";

const project: IProject = {
  id: "energy",
  title: "Comfortable Interactions",
  collapsed: true,
  what: "Can buildings even persuade you?",
  fields: [
    { title: "Type", value: "MSc dissertation project" },
    { title: "Tools", value: "E-paper display, Raspberry Pi, Python" },
  ],
  date: "2019",
  descriptionOne: `Can a building use natural language to explain what it's doing to keep you warm during winter? Can it tell you what kind of strategies you have to make yourself comfortable without increasing energy use?`,
  descriptionTwo: `In this project I used [HCI research methods](https://www.interaction-design.org/literature/topics/human-computer-interaction) to develop and evaluate an interface which lets users communicate with buildings with the goal of improving comfort and lowering energy use. Referencing the interesting work of Stewart Brand, Adrian Clear and Elizabeth Shove.`,
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-cover.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-render.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/comfortable-interactions/ci-perspective.jpg",
      dims: { width: 3500, height: 1968 }
    },
  ]
};

export default project;