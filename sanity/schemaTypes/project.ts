import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectId",
      title: "Project ID",
      type: "string",
      description: "Unique identifier (e.g., bp, elemental, cata)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: "Year or date string (e.g., 2024)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "Type label (e.g., Website, Experiment, Installation)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Selected Work", value: "selected" },
          { title: "Experimental Work", value: "experimental" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "what",
      title: "What",
      type: "string",
      description: "Brief description (e.g., Next.js Site)",
    }),
    defineField({
      name: "descriptionOne",
      title: "Description One",
      type: "text",
      description: "First paragraph (supports markdown links)",
    }),
    defineField({
      name: "descriptionTwo",
      title: "Description Two",
      type: "text",
      description: "Second paragraph (supports markdown links)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        },
      ],
    }),
    defineField({
      name: "fields",
      title: "Fields",
      type: "array",
      of: [{ type: "projectField" }],
      description: "Metadata fields (Client, Stack, Visit, etc.)",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "galleryItem" }],
    }),
    defineField({
      name: "hidden",
      title: "Hidden",
      type: "boolean",
      description: "Hide this project from display",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order within category (lower numbers first)",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Date",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      date: "date",
      hidden: "hidden",
      media: "gallery.0.image",
    },
    prepare({ title, category, date, hidden, media }) {
      return {
        title: `${hidden ? "[Hidden] " : ""}${title}`,
        subtitle: `${category} · ${date}`,
        media,
      };
    },
  },
});
