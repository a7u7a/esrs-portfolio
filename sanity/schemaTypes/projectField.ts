import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectField",
  title: "Project Field",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Field label (e.g., Client, Stack, Design, Visit)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "Field value. If empty, the title will act as the link text",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Optional link URL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      value: "value",
    },
    prepare({ title, value }) {
      return {
        title: title,
        subtitle: value || "(link)",
      };
    },
  },
});
