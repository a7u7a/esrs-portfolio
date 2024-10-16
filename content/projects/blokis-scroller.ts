import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Blokis Scroller Series",
  what: "A scale in which money loses meaning",
  collapsed: true,
  fields: [
    {
      title: "Type",
      value: "Custom software",
    },
    {
      title: "Comissioned by",
      value: "Ignacio Gatica",
      url: "https://www.blokis.com",
    },
    {
      title: "More info",
      url: "https://github.com/a7u7a/bloko",
    }
  ],
  date: "2022-24",
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/bloko/ticker2.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/bloko/debt.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/bloko/gallery2.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/bloko/perspective.jpg",
      dims: { width: 3500, height: 1968 }
    } 
  ]
};

export default project;