import { IProject } from "@/lib/types";

const project: IProject = {
  id: "pf",
  title: "Punto Flotante",
  type: "Installation",
  collapsed: true,
  what: "A summer working with mirrors and stepper motors",
  date: "2017",
  fields: [
    { title: "Tools", value: "Grasshopper3D, Arduino" },
    { title: "What?", value: "Solar clock" },
    { title: "Full video", url: "https://youtu.be/SHnhzbCWRn8" }
  ],
  descriptionOne: `At the time, I was very interested in forms of screenless tech; I had the opportunity to explore this during a residency at [Eigengrau Lab](https://sebastianrodriguez.ch/projects/eigengrau-laboratory-by-javier-toro-blum/), where I built these computer-controlled mirrors.`,
  descriptionTwo: `Hidden from pedestrian's view, they would reflect the light to a nearby facade, drawing an elliptical pattern each hour through the day. The project was exhibited during the [12th Media Art Biennale 2017](https://www.dropbox.com/scl/fi/d6zl4wa43xf2ybtok1f18/catalogo_bienal_12.pdf?rlkey=2fnm7euy0hmx2fwkpqhymwbao&st=uaz8glj4&dl=0), Santiago.`,
  gallery: [
    {
      type: "video",
      alt: "alt",
      src: "/assets/floatingpoint/fp-animation.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/fp-pano.jpg",
      dims: { width: 3500, height: 1968 }
    },
    {
      type: "video",
      alt: "alt",
      src: "/assets/floatingpoint/fp-video.mp4",
      dims: { width: 1920, height: 1080 }
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/TECHNICS-02.jpg",
      dims: { width: 2000, height: 1645 },
      bgColor: "black"
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/TECHNICS-01.jpg",
      dims: { width: 1900, height: 1645 },
      bgColor: "black"
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/maquina1.jpg",
      dims: { width: 1920, height: 1280 },
      bgColor: "#D9D9D9"
    },
    {
      type: "image",
      alt: "alt",
      src: "/assets/floatingpoint/controller.jpg",
      dims: { width: 1280, height: 853 },
      bgColor: "#D9D9D9"
    },
  ]
};

export default project;