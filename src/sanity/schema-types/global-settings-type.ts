import { defineField, defineType } from "sanity";

export const globalSettingsType = defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "favicon",
      type: "image",
      title: "Favicon",
      description: "Upload a square image (recommended size: 32x32 pixels) to use as the website favicon. This will appear in browser tabs and bookmarks.",
      options: {
        accept: "image/png, image/x-icon, image/svg+xml",
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Global Settings",
      };
    },
  },
});
