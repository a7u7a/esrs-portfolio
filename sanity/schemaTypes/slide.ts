import { defineType, defineField } from "sanity";

export default defineType({
  name: "slide",
  title: "Homepage Slide",
  type: "document",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Alternative text for accessibility",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
      description: "Original width in pixels (required for videos)",
      hidden: ({ parent }) => parent?.mediaType === "image",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { mediaType?: string };
          if (parent?.mediaType === "video" && !value) {
            return "Width is required for videos";
          }
          return true;
        }),
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
      description: "Original height in pixels (required for videos)",
      hidden: ({ parent }) => parent?.mediaType === "image",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { mediaType?: string };
          if (parent?.mediaType === "video" && !value) {
            return "Height is required for videos";
          }
          return true;
        }),
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      description: "Hex color code (e.g., #d8d8d8)",
    }),
    defineField({
      name: "hideCaption",
      title: "Hide Caption",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "projectRef",
      title: "Linked Project",
      type: "reference",
      to: [{ type: "project" }],
      description: "Project this slide links to",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (lower numbers first)",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      alt: "alt",
      image: "image",
      projectTitle: "projectRef.title",
    },
    prepare({ mediaType, alt, image, projectTitle }) {
      return {
        title: alt || "Slide",
        subtitle: `${mediaType === "video" ? "Video" : "Image"}${projectTitle ? ` → ${projectTitle}` : ""}`,
        media: mediaType === "image" ? image : undefined,
      };
    },
  },
});
