import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Elemental Chile",
  client: `**Elemental Chile** - *Architects*`,
  category: "client",
  year: "2024",
  stack: `
- Next.js
- TypeScript
- Tailwind CSS
- WebGl
  `,
  url: "https://elementalchile.cl/",
  description: `
This project involved a complete overhaul of Client X's portfolio website. The main goals were to:

1. Improve performance
2. Enhance user experience
3. Showcase their latest work

We implemented a *responsive design* using Tailwind CSS, ensuring the site looks great on all devices. The use of **Next.js** and TypeScript provided a robust foundation for building a fast, SEO-friendly site.

Key features include:
- Animated transitions using Framer Motion
- Server-side rendering for improved SEO
- Lazy loading of images for faster initial load times

Overall, the redesign resulted in a **40% increase** in user engagement and a *25% boost* in conversion rates.
  `,
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