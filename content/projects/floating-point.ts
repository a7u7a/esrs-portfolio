import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Floating Point",
  collapsed: true,
  what: "Public solar clock",
  date: "2016",
  canToggle: true,
  fields: [
    { title: "Type", value: "Self-initiated research project" },
    { title: "Tools", value: "Arduino, Grasshopper3D" },
  ],
  descriptionTwo: `A solar clock that uses the position of the sun to tell the time. It is powered by an Arduino and a Grasshopper3D.`,
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/1.jpg",
      dims: { width: 2412, height: 1452 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/2.jpg",
      dims: { width: 2412, height: 1452 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/3.jpg",
      dims: { width: 2412, height: 1452 }
    }
  ]
};

export default project;