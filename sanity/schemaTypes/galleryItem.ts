import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "object",
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
      description: "Original width in pixels",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
      description: "Original height in pixels",
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
      name: "projectTypeOverride",
      title: "Project Type Override",
      type: "string",
      description: "Override the project type label for this item",
    }),
    defineField({
      name: "hideMore",
      title: "Hide More",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      alt: "alt",
      image: "image",
    },
    prepare({ mediaType, alt, image }) {
      return {
        title: alt || "Gallery Item",
        subtitle: mediaType === "video" ? "Video" : "Image",
        media: mediaType === "image" ? image : undefined,
      };
    },
  },
});
