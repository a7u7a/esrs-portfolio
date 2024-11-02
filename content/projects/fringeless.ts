import { IProject } from "@/lib/types";

const project: IProject = {
  id: "fringeless",
  title: "Fringeless",
  type: "Experiment",
  collapsed: true,
  date: "2019",
  what: "Generative tourism for introverts",
  fields: [
    { title: "Tools", value: "Python, Google Maps API, thermal printer" },
    { title: "What?", value: "Generative instructions for city discovery" }
  ],
  descriptionOne: 'A fun experiment during DwD week: While living in Edinburgh you realize how much locals dislike when the city gets overrun by tourists during the [Fringe Festival](https://www.edfringe.com/). ',
  descriptionTwo: 'As response, we built this tool using Google Maps API, a thermal printer and a handcrafted dataset of interesting locations. It generated unique navigation instructions in puzzle form to get you to the least-crowded-but-still-fun place.',
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/fringeless/fl-1.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/fringeless/fl-2.jpg",
      dims: { width: 3500, height: 1968 }
    }
  ]
};

export default project;