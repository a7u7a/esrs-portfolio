import { IProject } from "@/lib/types";

export const project: IProject = {
  title: "Plasma birds",
  what: "Geeking out with Three.js, GLSL and Observable notebooks",
  fields: [
    { title: "Type", value: "Fun code experiment" },
    { title: "Tools", value: "Three.js + Observable" },
    { title: "Visit", url: 'https://observablehq.com/@esrs/plasma-boids-may-2022-update?collection=@esrs/boids' },
  ],
  date: "2024",
  collapsed: true,
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/boids/boids-sim.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/boids/boids-controls.mp4",
      dims: { width: 1920, height: 1080 }
    },
  ]
};

export default project;