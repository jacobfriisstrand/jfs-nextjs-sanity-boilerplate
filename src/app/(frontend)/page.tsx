import type { Metadata } from "next";

import { PageBuilderWrapper } from "@/components/page-builder-wrapper";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

async function getPage(params: RouteProps["params"]) {
  return sanityFetch({
    query: HOME_PAGE_QUERY,
    params: await params,
  });
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  return {
    title: page.homePage?.seo?.title,
  };
}

export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  return (
    <>
      <title>{page.homePage.seo.title}</title>
      {page?.homePage?.content
        ? (
            <PageBuilderWrapper content={page.homePage.content} documentId={page.homePage._id} documentType="page" />
          )
        : null}
    </>
  );
}
