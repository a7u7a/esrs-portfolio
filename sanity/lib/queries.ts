import { client } from "./client";
import type {
  ISanityProject,
  ISanityCollaborator,
  ISanityEducation,
  ISanityPublication,
  ISanityService,
  ISanitySocial,
  ISanitySlide,
} from "@/lib/types";

// ============================================================================
// Projects
// ============================================================================

const projectFields = `
  _id,
  "id": projectId,
  title,
  date,
  "type": projectType,
  category,
  what,
  descriptionOne,
  descriptionTwo,
  link,
  fields,
  hidden,
  collapsed,
  order,
  gallery[] {
    _key,
    mediaType,
    "image": image.asset-> {
      _id,
      url,
      metadata {
        dimensions
      }
    },
    "video": video.asset->,
    alt,
    width,
    height,
    bgColor,
    hideCaption,
    projectTypeOverride,
    hideMore
  }
`;

export async function getProjects(
  category?: "selected" | "experimental"
): Promise<ISanityProject[]> {
  const categoryFilter = category ? `&& category == "${category}"` : "";

  return client.fetch(
    `*[_type == "project" && hidden != true ${categoryFilter}] | order(order asc) {
      ${projectFields}
    }`
  );
}

export async function getSelectedProjects(): Promise<ISanityProject[]> {
  return getProjects("selected");
}

export async function getExperimentalProjects(): Promise<ISanityProject[]> {
  return getProjects("experimental");
}

export async function getProjectById(
  id: string
): Promise<ISanityProject | null> {
  return client.fetch(
    `*[_type == "project" && projectId == $id][0] {
      ${projectFields}
    }`,
    { id }
  );
}

export async function getAllProjects(): Promise<ISanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      ${projectFields}
    }`
  );
}

// ============================================================================
// Collaborators
// ============================================================================

export async function getCollaborators(): Promise<ISanityCollaborator[]> {
  return client.fetch(
    `*[_type == "collaborator"] | order(order asc) {
      _id,
      name,
      url,
      order
    }`
  );
}

// ============================================================================
// Education
// ============================================================================

export async function getEducation(): Promise<ISanityEducation[]> {
  return client.fetch(
    `*[_type == "education"] | order(order asc) {
      _id,
      title,
      order
    }`
  );
}

// ============================================================================
// Publications
// ============================================================================

export async function getPublications(): Promise<ISanityPublication[]> {
  return client.fetch(
    `*[_type == "publication"] | order(order asc) {
      _id,
      text,
      url,
      order
    }`
  );
}

// ============================================================================
// Services
// ============================================================================

export async function getServices(): Promise<ISanityService[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id,
      title,
      order
    }`
  );
}

// ============================================================================
// Socials
// ============================================================================

export async function getSocials(): Promise<ISanitySocial[]> {
  return client.fetch(
    `*[_type == "social"] | order(order asc) {
      _id,
      name,
      url,
      order
    }`
  );
}

// ============================================================================
// Slides
// ============================================================================

export async function getSlides(): Promise<ISanitySlide[]> {
  return client.fetch(
    `*[_type == "slide"] | order(order asc) {
      _id,
      mediaType,
      "image": image.asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      "video": video.asset->,
      alt,
      width,
      height,
      bgColor,
      hideCaption,
      order,
      "projectRef": projectRef->{
        _id,
        "id": projectId,
        title
      }
    }`
  );
}

export async function getShuffledSlides(): Promise<ISanitySlide[]> {
  const slides = await getSlides();
  // Shuffle the slides client-side
  return slides.sort(() => 0.5 - Math.random());
}
