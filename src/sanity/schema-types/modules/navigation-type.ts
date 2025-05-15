import { defineField, defineType } from "sanity";

export const navigationType = defineType({
  name: "navigation",
  type: "document",
  title: "Navigationss",
  icon: () => "🔗",
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

export const navigationLinkType = defineType({
  name: "navigationLink",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      description: "The text that will be displayed in the navigation",
      type: "string",
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
      },
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Enter a valid URL starting with https:// (e.g., https://example.com)",
      validation: Rule => Rule.custom((value, context) => {
        const parent = context.parent as { linkType?: string };
        if (parent?.linkType === "external" && !value) {
          return "URL is required for external links";
        }
        return true;
      }),
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
    defineField({
      name: "page",
      title: "Page",
      type: "reference",
      validation: Rule => Rule.custom((value, context) => {
        const parent = context.parent as { linkType?: string };
        if (parent?.linkType === "internal" && !value) {
          return "Page is required for internal links";
        }
        return true;
      }),
      to: [{ type: "genericPage" }, { type: "coursePage" }, { type: "productPage" }],
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),
  ],
});
