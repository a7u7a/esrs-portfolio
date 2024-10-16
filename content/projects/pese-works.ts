import { IProject } from "@/lib/types";

const project: IProject = {
  title: "PESE.works",
  what: "Scroll-based 3D interactions",
  date: "2022",
  collapsed: true,
  fields: [
    { title: "Type", value: "Portfolio site" },
    { title: "Stack", value: "React-Three-Fiber, TypeScript, WebGL, Next.js." },
    { title: "Visit", url: "https://peseworks.com" },
  ],
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/peseworks/peseworks.mp4",
      dims: { width: 1920, height: 1080 }
    }
  ]
};

export default project;