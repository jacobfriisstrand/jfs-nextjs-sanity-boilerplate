import { PortableText } from "next-sanity";

import type { PAGE_QUERYResult } from "@/sanity/types";

import { SanityImage } from "@/components/sanity-image";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["pageBuilder"]>[number],
  { _type: "hero" }
>;

export function Hero({ title, text, image }: HeroProps) {
  return (
    <section>
      <div>
        {title
          ? (
              <h1>
                {title}
              </h1>
            )
          : null}
        <div>
          {text ? <PortableText value={text} /> : null}
        </div>
      </div>
      <div />
      {image
        ? (
            <SanityImage
              image={image}
              className="full-bleed"
              priority
              aspectRatio={16 / 9}
            />
          )
        : null}
    </section>
  );
}
