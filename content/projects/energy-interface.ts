import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Comfortable Interactions",
  collapsed: true,
  canToggle: true,
  what: "Can buildings even persuade you?",
  fields: [
    { title: "Type", value: "Research project" },
    { title: "Tools", value: "E-paper display, Raspberry Pi, Python" },
  ],
  date: "2019",
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
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