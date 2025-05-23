"use client";

import { createDataAttribute } from "next-sanity";

import type { PAGE_QUERYResult } from "@/sanity/types";

import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { TextAndImage } from "@/components/text-and-image";
import { createDataAttributeConfig } from "@/sanity/lib/data-attribute-config";

type PageBuilderProps = {
  modules: NonNullable<PAGE_QUERYResult>["pageBuilder"];
  documentId: string;
  documentType: string;
};

function DragHandle({
  children,
  blockKey,
  documentId,
  documentType,
}: {
  children: React.ReactNode;
  blockKey: string;
  documentId: string;
  documentType: string;
}) {
  return (
    <div
      className="wrapper"
      data-sanity={createDataAttribute({
        ...createDataAttributeConfig,
        id: documentId,
        type: documentType,
        path: `content[_key=="${blockKey}"]`,
      }).toString()}
    >
      {children}
    </div>
  );
}

export function PageBuilder({
  modules,
  documentId,
  documentType,
}: PageBuilderProps) {
  // Ensure content is an array
  const blocks = Array.isArray(modules) ? modules : [];

  return (
    <main
      data-sanity={createDataAttribute({
        ...createDataAttributeConfig,
        id: documentId,
        type: documentType,
        path: "pageBuilder",
      }).toString()}
    >
      {blocks.map((block) => {
        switch (block._type) {
          case "hero":
            return (
              <DragHandle key={block._key} blockKey={block._key} documentId={documentId} documentType={documentType}>
                <Hero {...block} />
              </DragHandle>
            );
          case "features":
            return (
              <DragHandle key={block._key} blockKey={block._key} documentId={documentId} documentType={documentType}>
                <Features {...block} />
              </DragHandle>
            );
          case "textAndImage":
            return (
              <DragHandle key={block._key} blockKey={block._key} documentId={documentId} documentType={documentType}>
                <TextAndImage {...block} />
              </DragHandle>
            );
          case "faqs":
            return (
              <DragHandle key={block._key} blockKey={block._key} documentId={documentId} documentType={documentType}>
                <FAQs {...block} />
              </DragHandle>
            );
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
