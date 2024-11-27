import { IProject } from "@/lib/types";

export const project: IProject = {
  id: "boids",
  title: "Particle simulation",
  type: "Experiment",
  what: "Three.js, GLSL and Observable notebooks",
  fields: [
    { title: "Stack", value: "Three.js, Observable" },
    { title: "What?", value: "Boids particle simulation" },
    { title: "Go", url: "https://observablehq.com/@esrs/plasma-boids-may-2022-update" }
  ],
  date: "2021",
  collapsed: true,
  descriptionOne: `I implemented this [boids simulation](https://www.cs.toronto.edu/~dt/siggraph97-course/cwr87/) as part of my journey of learning graphics programming for the web. I was kind of obsessed with code notebooks at the time and ended up using Observable.`,
  descriptionTwo: `As bonus, I added my take on wind effect using 3D perlin noise vector fields. During the process I also made a lot of [smaller notebooks](https://observablehq.com/@esrs/plasma-boids-may-2022-update?tab=collections&collection=@esrs/boids) with tests, adapted mostly from [The Nature of Code](https://natureofcode.com/) book.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/boids/boids-sim.mp4",
      dims: { width: 1920, height: 1080 },
      bgColor: "#D9D9D9"
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/boids/boids-controls.mp4",
      dims: { width: 1920, height: 1080 },
      bgColor: "#D9D9D9"
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/boids/boids-pro.mp4",
      dims: { width: 1920, height: 1080 },
      bgColor: "#D9D9D9"
    },
  ]
};

export default project;