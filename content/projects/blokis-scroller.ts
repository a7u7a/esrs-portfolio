import { IProject } from "@/lib/types";

const project: IProject = {
  title: "Scroller Series",
  what: "Screens that show big numbers",
  collapsed: true,
  fields: [
    {
      title: "Type",
      value: "Custom software",
    },
    {
      title: "Comissioned by",
      value: "Ignacio Gatica",
      url: "https://www.instagram.com/ignaciogatica",
    },
    {
      title: "Stack",
      value: "Python, Pandas, World Bank API, Yahoo Finance API, Raspberry Pi",
    },
    {
      title: "More info",
      url: "https://github.com/a7u7a/bloko",
    }
  ],
  date: "2022",
  
  descriptionOne: `Controller for a custom LED, infinite-scrolling, financial [ticker](https://corporatefinanceinstitute.com/resources/wealth-management/what-is-ticker) display. Later extended to work with country data, such as [international debt](https://databank.worldbank.org/metadataglossary/international-debt-statistics/series/DT.DOD.DECT.CD.CG) and GDP.`,
  descriptionTwo: `The piece explores the significance of money on a planetary scale and has been featured by [The Washington Post](https://www.washingtonpost.com/arts-entertainment/2023/04/21/art-gallery-shows-dc-area/) and [Frieze](https://www.frieze.com/article/ignacio-gatica-sujeto-cuantificado-quantified-subject-2023-review).`,
  gallery: [
    {
      type: "image",
      alt: "alt",
      src: "/assets/bloko/perspective.jpg",
      dims: { width: 3500, height: 1968 }
    },
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
      src: "/assets/bloko/interrupt.png",
      dims: { width: 3500, height: 1968 }
    },
  ]
};

export default project;