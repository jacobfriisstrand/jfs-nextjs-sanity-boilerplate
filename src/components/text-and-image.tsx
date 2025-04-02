import { stegaClean } from "next-sanity";

import type { PAGE_QUERYResult } from "@/sanity/types";

import { SanityImage } from "@/components/sanity-image";

type TextAndImageProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "textAndImage" }
>;

export function TextAndImage({ title, image, orientation }: TextAndImageProps) {
  return (
    <section
      className="container mx-auto flex gap-8 py-16 data-[orientation='imageRight']:flex-row-reverse"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {image
        ? (
            <SanityImage
              className="rounded-xl w-2/3 h-auto"
              image={image}
              aspectRatio={16 / 9}
            />
          )
        : null}
      <div className="w-1/3 flex items-center">
        {title
          ? (
              <h2 className="text-3xl mx-auto md:text-5xl lg:text-8xl font-light text-pink-500 text-pretty max-w-3xl">
                {title}
              </h2>
            )
          : null}
      </div>
    </section>
  );
}
