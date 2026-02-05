import { PortableTextBlock } from "@portabletext/types";

// ============================================================================
// Legacy types (for local content - can be removed after migration)
// ============================================================================

export interface IGalleryItem {
  hideCaption?: boolean;
  projectTypeOverride?: string;
  hideMore?: boolean;
  id?: string;
  type: "image" | "video";
  alt: string;
  src: string;
  dims?: { height: number; width: number };
  poster?: string;
  bgColor?: string;
}

interface ILink {
  title: string;
  url: string;
}

export interface IProject {
  hidden?: boolean;
  type: string;
  link?: ILink;
  id: string;
  title: string;
  date: string;
  descriptionOne?: string;
  descriptionTwo: string;
  gallery: IGalleryItem[];
  fields: IProjectField[];
  what?: string;
  tags?: IProjectTag[];
}

export interface IProjectField {
  title: string; // Client, Category, Stack, Visit, etc
  value?: string; // If value empty, the title will act as link, otherwise the value will act as link
  url?: string; // https://beigepill.com, etc
}

interface IProjectTag {
  label: string;
  url?: string;
}
export interface IProjectFieldNew {
  title: string;
  value: { label: string; url?: string };
}

export interface ICollaborator {
  name: string;
  url: string;
}

// ============================================================================
// Sanity Asset Types
// ============================================================================

export interface ISanityImageAsset {
  _id: string;
  _type: "sanity.imageAsset";
  url: string;
  path: string;
  assetId: string;
  extension: string;
  mimeType: string;
  metadata?: {
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    lqip?: string;
  };
}

export interface ISanityFileAsset {
  _id: string;
  _type: "sanity.fileAsset";
  url: string;
  path: string;
  assetId: string;
  extension: string;
  mimeType: string;
}

// ============================================================================
// Sanity Content Types
// ============================================================================

export interface ISanityGalleryItem {
  _key?: string;
  mediaType: "image" | "video";
  image?: ISanityImageAsset;
  video?: ISanityFileAsset;
  alt: string;
  width?: number; // Only for videos
  height?: number; // Only for videos
  bgColor?: string;
  hideCaption?: boolean;
  projectTypeOverride?: string;
  hideMore?: boolean;
}

// Common type for carousel items (used by both slides and gallery items)
export interface ICarouselItem {
  _id?: string;
  _key?: string;
  mediaType: "image" | "video";
  image?: ISanityImageAsset;
  video?: ISanityFileAsset;
  alt: string;
  width?: number; // Only present for videos
  height?: number; // Only present for videos
  bgColor?: string;
  hideCaption?: boolean;
  projectRef?: {
    _id: string;
    id: string;
    title: string;
  };
}

export interface ISanityProjectField {
  _key?: string;
  title: string;
  value?: string;
  url?: string;
}

export interface ISanityProject {
  _id: string;
  id: string; // projectId
  title: string;
  date: string;
  type: string; // projectType
  category: "selected" | "experimental";
  what?: string;
  descriptionOne?: string;
  descriptionTwo: string;
  link?: {
    title?: string;
    url?: string;
  };
  fields?: ISanityProjectField[];
  gallery?: ISanityGalleryItem[];
  hidden?: boolean;
  order?: number;
}

export interface ISanityCollaborator {
  _id: string;
  name: string;
  url: string;
  order?: number;
}

export interface ISanityEducation {
  _id: string;
  title: string;
  order?: number;
}

export interface ISanityPublication {
  _id: string;
  text: string;
  url: string;
  order?: number;
}

export interface ISanityService {
  _id: string;
  title: string;
  order?: number;
}

export interface ISanitySocial {
  _id: string;
  name: string;
  url: string;
  order?: number;
}

export interface ISanitySlide {
  _id: string;
  mediaType: "image" | "video";
  image?: ISanityImageAsset;
  video?: ISanityFileAsset;
  alt: string;
  width?: number;
  height?: number;
  bgColor?: string;
  hideCaption?: boolean;
  order?: number;
  projectRef?: {
    _id: string;
    id: string;
    title: string;
  };
}

export interface ISanityHomepageParagraph {
  _id: string;
  text: string;
  position: "before" | "after";
  order?: number;
}

// ============================================================================
// Blog Types
// ============================================================================

export interface IPost {
  _id: string;
  slug: string;
  title: string;
  date: string;
  content: PortableTextBlock[];
}
