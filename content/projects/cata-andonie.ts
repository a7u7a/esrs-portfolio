import { IProject } from "@/lib/types";

export const project: IProject = {
  title: "Catalina Andonie Portfolio",
  collapsed: true,
  what: "Fullscreen fragment shaders for a portfolio site",
  fields: [
    { title: "Type", value: "Portfolio site" },
    { title: "Stack", value: "Next.js, TypeScript, Sanity, WebGL" },
    { title: "Visit", url: "https://catalinaandonie.com/" },
  ],
  date: "2022",
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/catalinaandonie/cataandonie-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
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