import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Elemental Chile",
  date: "2024",
  canToggle: true,
  collapsed: false,
  fields: [
    { title: "Type", value: "Web App" },
    { title: "Design", value: "Client co-design" },
    { title: "Stack", value: "TypeScript, Tailwind, Next.js, Sanity CMS, Vercel." },
    { title: "Visit", url: "https://elementalchile.cl" },
  ],
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/elemental/elemental-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/elemental/elemental-mobile.mp4",
      dims: { width: 1920, height: 1080 }
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