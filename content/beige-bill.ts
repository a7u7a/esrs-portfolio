import { IProject } from "@/lib/types";

export const project: IProject = {
  title: "BeigePill Productions",
  client: `BeigePill, FutureCorp`,
  category: "client",
  year: "2024",
  stack: `
- Next.js
- TypeScript
- Tailwind CSS
- WebGl
  `,
  visit: {
    title: "beigepill.com",
    url: "https://beigepill.com/"
  },
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
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