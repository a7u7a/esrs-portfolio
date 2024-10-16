import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Floating Point",
  collapsed: true,
  what: "A summer playing with stepper motors and mirrors in the sun",
  date: "2016",
  canToggle: true,
  fields: [
    { title: "Type", value: "Self-initiated research project" },
    { title: "Tools", value: "Arduino, Grasshopper3D" },
  ],
  descriptionTwo: `A solar clock that uses the position of the sun to tell the time. It is powered by an Arduino and a Grasshopper3D.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/floatingpoint/fp-video.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/floatingpoint/fp-animation.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/fp-pano.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/fp-cad.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/fp-double1.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/fp-double2.jpg",
      dims: { width: 3500, height: 1968 }
    },
    
    
  ]
};

export default project;