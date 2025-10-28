import type { Metadata } from "next";

import { PageBuilderWrapper } from "@/components/core/page-builder-wrapper";
import { PAGE_TYPES } from "@/sanity/constants/page-types";
import { urlFor } from "@/sanity/lib/image";
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

  if (!page) {
    return {};
  }

  const metadata: Metadata = {
    title: page?.seo.title,
    description: page?.seo.description,
  };

  if (page?.seo.image && page?.seo.image.asset?._ref) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page?.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}
export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  return (
    <>
      <title>{page?.seo?.title}</title>
      {page?.pageBuilder
        ? (
            <PageBuilderWrapper modules={page.pageBuilder} documentId={page._id} documentType={PAGE_TYPES[0]} />
          )
        : null}
    </>
  );
}
