"use client";

import type { PAGE_QUERYResult } from "@/sanity/types";

import { PageBuilder } from "@/components/page-builder";

type PageBuilderWrapperProps = {
  content: NonNullable<PAGE_QUERYResult>["content"];
  documentId: string;
  documentType: string;
};

export function PageBuilderWrapper(props: PageBuilderWrapperProps) {
  return <PageBuilder {...props} />;
}
