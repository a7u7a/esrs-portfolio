import { IProject } from "@/lib/types";

export const project: IProject = {
  title: "BeigePill Productions",
  date: "June 2024",
  fields: [
    { title: "Type", value: "Portfolio website" },
    { title: "Design", value: "FutureCorp", url: "https://futurecorp.paris/" },
    { title: "Stack", value: "React Three Fiber, GSAP, Next.js, TypeScript, Mux API, Sanity CMS." },
    { title: "Visit", url: "https://beigepill.com" },
  ],
  descriptionOne: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula dui sed sem porta facilisis. Sed non pretium sem. Aenean ultricies nulla eu justo fermentum, ut tempor risus viverra. Nulla blandit ligula eget mi pharetra tempus. Praesent justo mi, fermentum ut elit eget.`,
  descriptionTwo: `Blandit aliquam libero. Integer maximus, augue eget posuere pretium, ipsum lectus porttitor lectus, eu blandit quam nisl ac nibh. Vivamus ac ipsum id augue molestie semper et faucibus dolor. Donec placerat commodo posuere. Nulla feugiat lacinia ex tempus varius. Nunc imperdiet quis lorem in scelerisque.`,
  gallery: [
    {
      type: "video",
      alt: "Dot mask scroller demo, desktop",
      src: "/assets/beigepill/homescroller-desktop.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "video",
      alt: "Dot mask scroller demo, mobile",
      src: "/assets/beigepill/homescroller-mobile.mp4",
      dims: { width: 1920, height: 1080 }
    }
  ],
};

export default project;