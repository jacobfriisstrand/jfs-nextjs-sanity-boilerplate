import { PageBuilderWrapper } from "@/components/page-builder-wrapper";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  return page?.homePage?.content
    ? (
        <PageBuilderWrapper content={page?.homePage.content} documentId={page?.homePage._id} documentType="page" />
      )
    : null;
}
