import type { StegaBranded } from "next-sanity";

import { stegaClean } from "next-sanity";

import type { PAGE_QUERY_RESULT } from "@/sanity/types";

import { Image } from "@/components/core/image";

type TextAndImageProps = Extract<
  StegaBranded<NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>>[number],
  { _type: "textAndImage" }
>;

export function TextAndImage({ title, image, orientation }: TextAndImageProps) {
  return (
    <section
      className="mx-auto flex gap-8 py-16"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {image
        ? (
            <Image
              className="aspect-video"
              image={{
                asset: {
                  url: image.asset?.url || "",
                },
                alt: image.alt || "",
              }}
            />
          )
        : null}
      <div className="w-1/3 flex items-center">
        {title
          ? (
              <h2 className="text-4xl font-light text-center">
                {title}
              </h2>
            )
          : null}
      </div>
    </section>
  );
}
