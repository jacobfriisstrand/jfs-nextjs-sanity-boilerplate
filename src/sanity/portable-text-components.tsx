import type { PortableTextComponents } from "next-sanity";

import { SanityImage } from "@/components/ui/sanity-image";

export const components: PortableTextComponents = {
  types: {
    image: props =>
      props.value
        ? (
            <>
              <SanityImage
                className="not-prose w-full h-auto"
                image={props.value}
              />
              {props.value.caption && (
                <p className="text-sm mt-2 text-gray-600 italic">
                  {props.value.caption}
                </p>
              )}
            </>
          )
        : null,
  },
};
