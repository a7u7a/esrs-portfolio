export interface IGalleryItem {
  type: "image" | "video";
  alt: string
  src: string
  dims: { height: number, width: number }
}

export interface IProject {
  category: "Selected" | "Experimental"
  title: string;
  client: string;
  year: string;
  stack: string[];
  visit?: { title: string, url: string };
  descriptionOne?: string;
  descriptionTwo: string;
  gallery: IGalleryItem[];
  collapsed?: boolean
}
