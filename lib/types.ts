export interface IGalleryItem {
  type: "image" | "video";
  alt: string
  src: string
  dims: { height: number, width: number }
}

export interface IProject {
  title: string;
  date: string;
  descriptionOne?: string;
  descriptionTwo: string;
  gallery: IGalleryItem[];
  collapsed?: boolean
  fields?: IProjectField[]
  what?: string
  canToggle?: boolean // default false
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
