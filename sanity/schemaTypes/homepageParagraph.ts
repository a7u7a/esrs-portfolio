import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepageParagraph",
  title: "Homepage Paragraph",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      description: "Where this paragraph appears on the homepage",
      options: {
        list: [
          { title: "Before Carousel", value: "before" },
          { title: "After Carousel", value: "after" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order within its position group (lower numbers first)",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Position, then Order",
      name: "positionOrder",
      by: [
        { field: "position", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "text",
      position: "position",
      order: "order",
    },
    prepare({ title, position, order }) {
      return {
        title: title || "Untitled",
        subtitle: `${position === "before" ? "Before" : "After"} carousel • Order: ${order ?? "—"}`,
      };
    },
  },
});
