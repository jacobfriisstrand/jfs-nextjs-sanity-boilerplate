import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fieldsets: [
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      description: "If provided, this will override the page title field",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "A concise summary of your page (150-160 characters recommended). This appears in search results and when your page is shared on social media. Make it unique, descriptive, and include relevant details like author, date, or key information.",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      description: "This image will be used for the SEO image, eg. when the page is shared on social media",
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
      description: "If enabled, the page will not be indexed by search engines",
    }),

  ],
});
