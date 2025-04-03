import type { Metadata } from "next";

import { PageBuilderWrapper } from "@/components/page-builder-wrapper";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

async function getPage(params: RouteProps["params"]) {
  return sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  return {
    title: page.seo.title,
  };
}

export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  return (
    <>
      <title>{page.seo.title}</title>
      {page?.content ? <PageBuilderWrapper content={page.content} documentId={page._id} documentType="page" /> : null}
    </>
  );
}
