import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Fringeless",
  collapsed: true,
  date: "2019",
  canToggle: true,
  what: "Generative tourism for introverts",
  fields: [
    { title: "Type", value: "Research project" },
    { title: "Tools", value: "Python, Google Maps API, thermal printer" },
  ],
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
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