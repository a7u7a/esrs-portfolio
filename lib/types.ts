export interface IGalleryItem {
  type: "image" | "video";
  alt: string
  src: string
  dims: { height: number, width: number }
}

export interface IProjectData {
  title: string;
  link: { url: string, label: string };
  caption: string;
  client: string;
  year: string;
  stack: string[];
  gallery: IGalleryItem[];
}

export interface IProject {
  title: string; // md
  client: string; // md
  year: string; // not md
  stack: string; // md
  url: string; // md
  description: string; // md
  category: "client" | "experimental"
  gallery: IGalleryItem[];
}
