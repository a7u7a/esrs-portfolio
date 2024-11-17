import { IProject } from "@/lib/types";

export const project: IProject = {
  hidden: true,
  id: "onditasensible",
  title: "Ondita Sensible",
  date: "2022",
  type: "Experiment",
  what: "Website",
  tags: [
    { label: "Website", url: "https://observablehq.com/@esrs/combinando-ondas-en-three-js" },
  ],
  fields: [
    { title: "Design", value: "Ignacio Serrano" },
    
    { title: "See live", url: "https://observablehq.com/@esrs/combinando-ondas-en-three-js" }
  ],
  descriptionOne: ``,
  descriptionTwo: ``,
  gallery: [
    {
      type: "image",
      alt: "BeigePill website",
      src: "/assets/beigepill/covernew_opt.png",
      dims: { width: 3200, height: 1677 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Scroll mask demo, loop",
      src: "/assets/beigepill/desktop_mask_loop_handbrake_optimized.mp4",
      dims: { width: 1280, height: 720 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Desktop hp scroll",
      src: "/assets/beigepill/desktop_hp_scroll_handbrake_optimized.mp4",
      dims: { width: 1152, height: 720 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Mobile hp scroll",
      src: "/assets/beigepill/mobile_hp_scroll_handbrake_optimized.mp4",
      dims: { width: 382, height: 680 },
      bgColor:"#D9D9D9"
    },
    {
      type: "video",
      alt: "Desktop works scroll",
      src: "/assets/beigepill/desktop_works_scroll_handbrake_optimized.mp4",
      dims: { width: 1152, height: 720 },
      bgColor:"#D9D9D9"
    }
  ],
};

export default project;