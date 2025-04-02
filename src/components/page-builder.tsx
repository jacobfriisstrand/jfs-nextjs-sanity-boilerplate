import type { PAGE_QUERYResult } from "@/sanity/types";

import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { TextAndImage } from "@/components/text-and-image";

type PageBuilderProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "features":
            return <Features key={block._key} {...block} />;
          case "textAndImage":
            return <TextAndImage key={block._key} {...block} />;
          case "faqs":
            return <FAQs key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return (
              <div key={(block as { _key: string; _type: string })._key}>
                Block not found:
                {(block as { _key: string; _type: string })._type}
              </div>
            );
        }
      })}
    </main>
  );
}
