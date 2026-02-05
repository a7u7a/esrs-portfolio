import { type SchemaTypeDefinition } from "sanity";
import post from "./post";
import project from "./project";
import galleryItem from "./galleryItem";
import projectField from "./projectField";
import collaborator from "./collaborator";
import education from "./education";
import publication from "./publication";
import service from "./service";
import social from "./social";
import slide from "./slide";
import homepageParagraph from "./homepageParagraph";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    post,
    project,
    collaborator,
    education,
    publication,
    service,
    social,
    slide,
    homepageParagraph,
    // Object types
    galleryItem,
    projectField,
  ],
};
