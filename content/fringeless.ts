import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Fringeless",
  client: `MSc project`,
  collapsed: true,
  year: "2019",
  stack: ['Raspberry Pi', 'Python', 'Grasshopper 3D'],
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
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