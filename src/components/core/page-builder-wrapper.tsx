import type { PAGE_QUERY_RESULT } from "@/sanity/types";

import { PageBuilder } from "@/components/core/page-builder";

type PageBuilderWrapperProps = {
  modules: NonNullable<PAGE_QUERY_RESULT>["pageBuilder"];
  documentId: string;
  documentType: string;
};

export function PageBuilderWrapper(props: PageBuilderWrapperProps) {
  return <PageBuilder {...props} />;
}
