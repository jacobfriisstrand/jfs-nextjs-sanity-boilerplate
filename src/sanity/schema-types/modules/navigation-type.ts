import { defineField, defineType } from "sanity";

export const navigationType = defineType({
  name: "navigation",
  type: "document",
  title: "Navigation",
  icon: () => "🔗",
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Navigation",
      };
    },
  },
  fields: [
    defineField({
      name: "leftMenu",
      description: "The links for the left side of the navigation bar. On mobile, these links will appear first, followed by the right menu links. The maximum number of links is 4.",
      type: "array",
      of: [{ type: "navigationLink" }],
      validation: Rule => Rule.required().max(4),
    }),
    defineField({
      name: "rightMenu",
      description: "The links for the right side of the navigation bar. On mobile, these links will appear after the left menu links. The maximum number of links is 4.",
      type: "array",
      of: [{ type: "navigationLink" }],
      validation: Rule => Rule.required().max(4),
    }),
  ],
});
