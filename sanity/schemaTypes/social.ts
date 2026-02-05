import { defineType, defineField } from "sanity";

export default defineType({
  name: "social",
  title: "Social Link",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Platform name (e.g., Github, LinkedIn)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
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
      name: "name",
      url: "url",
    },
    prepare({ name, url }) {
      return {
        title: name,
        subtitle: url,
      };
    },
  },
});
