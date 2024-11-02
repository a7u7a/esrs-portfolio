export interface IGalleryItem {
  hideCaption?: boolean
  projectTypeOverride?: string
  hideMore?: boolean
  id?: string;
  type: "image" | "video";
  alt: string
  src: string
  dims?: { height: number, width: number }
  poster?: string
}

interface ILink {
  title: string
  url: string
}

export interface IProject {
  type: string
  link?: ILink
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

export interface ICollaborator {
  name: string
  url: string
}
