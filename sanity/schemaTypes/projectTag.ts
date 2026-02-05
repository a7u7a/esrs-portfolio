import { defineType, defineField } from "sanity";

export default defineType({
  name: "projectTag",
  title: "Project Tag",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Optional link for the tag",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
  preview: {
    select: {
      label: "label",
      url: "url",
    },
    prepare({ label, url }) {
      return {
        title: label,
        subtitle: url || "",
      };
    },
  },
});
