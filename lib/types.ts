export interface IGalleryItem {
  type: "image" | "video";
  alt: string
  src: string
  dims: { height: number, width: number }
}

export interface IProject {
  title: string;
  client: string;
  year: string;
  stack: string;
  visit?: { title: string, url: string };
  descriptionOne?: string;
  descriptionTwo: string;
  category: "client" | "experimental"
  gallery: IGalleryItem[];
}
