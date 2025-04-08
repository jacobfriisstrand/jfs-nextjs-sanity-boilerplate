import { defineField } from "sanity";

export function imageFieldType(name: string) {
  return defineField({
    name,
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alternative text",
        description: "A short description of the image for accessibility and SEO purposes",
        validation: rule => rule.custom((value, context) => {
          const parent = context?.parent as { asset?: { _ref?: string } };
          return (
            !value && parent?.asset?._ref
              ? "Alt text is required when an image is present"
              : true
          );
        }),
      }),
    ],
  });
}
