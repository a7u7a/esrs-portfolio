import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description: "Publication description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Link to publication",
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
      text: "text",
      url: "url",
    },
    prepare({ text, url }) {
      return {
        title: text?.substring(0, 50) + (text?.length > 50 ? "..." : ""),
        subtitle: url,
      };
    },
  },
});
