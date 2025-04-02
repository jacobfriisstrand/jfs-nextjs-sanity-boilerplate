import { defineField, defineType } from "sanity";

import { imageFieldType } from "@/sanity/schema-types/utility-schema-types/image-field-type";

export const textAndImageType = defineType({
  name: "textAndImage",
  type: "object",
  fields: [
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    imageFieldType("image"),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Text and Image",
        media,
      };
    },
  },
});
