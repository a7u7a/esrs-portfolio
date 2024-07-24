import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Interactive Ticker scroller",
  client: `Ignacio Gatica`,
  category: "client",
  year: "2024",
  stack: `Python, H. Zeller's RPi-rgb-led-matrix, Raspberry Pi`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/1.jpg",
      dims: { width: 750, height: 562 }
    }
  ]
};

export default project;