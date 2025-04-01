import { defineArrayMember, defineType } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "hero" }),
    defineArrayMember({ type: "textAndImage" }),
    defineArrayMember({ type: "features" }),
    defineArrayMember({ type: "faqs" }),
  ],
  // Possibilty for adding custom image previews (screenshots) of each component in the page builder.
  // If desired, add a screenshot to the public folder and reference it here.
  // The screenshot must be named exactly the same as the component type.
  // options: {
  //   insertMenu: {
  //     views: [
  //       {
  //         name: "grid",
  //         previewImageUrl: schemaType => `/block-previews/${schemaType}.png`,
  //       },
  //     ],
  //   },
  // },
});
