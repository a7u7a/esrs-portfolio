export interface IGalleryItem {
  id?: string;
  type: "image" | "video";
  alt: string
  src: string
  // dims: { height: number, width: number }
}

export interface IProject {
  id: string;
  title: string;
  date: string;
  descriptionOne?: string;
  descriptionTwo: string;
  gallery: IGalleryItem[];
  collapsed?: boolean
  fields?: IProjectField[]
  what?: string
}

export interface IProjectField {
  title: string // Client, Category, Stack, Visit, etc
  value?: string // If value empty, the title will act as link, otherwise the value will act as link
  url?: string // https://beigepill.com, etc
}

export interface ICollaborators {
  name: string
  url?: string
}
