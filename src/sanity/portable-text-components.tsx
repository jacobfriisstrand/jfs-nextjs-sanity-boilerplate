import type { PortableTextComponents } from "next-sanity";

import { ResponsiveImage } from "@/components/ui/responsive-image";

export const components: PortableTextComponents = {
  types: {
    image: props =>
      props.value
        ? (
            <div className="flex flex-col gap-6">
              <ResponsiveImage
                image={props.value}
                className="aspect-square"
              />
              {props.value.caption && (
                <p className="text-sm text-gray-600 italic">
                  {props.value.caption}
                </p>
              )}
            </div>
          )
        : null,
  },
};
