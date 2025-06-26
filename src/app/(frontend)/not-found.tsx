// TODO: Change navigation text color to be chosen on each page template

import type { Metadata } from "next";

import Link from "next/link";

import type { ExtendedNavigationLink } from "@/lib/utils/transform-navigation-link";

import { transformNavigationLinks } from "@/lib/utils/transform-navigation-link";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { NOT_FOUND_PAGE_QUERY } from "@/sanity/lib/queries";

async function getPage() {
  return sanityFetch({
    query: NOT_FOUND_PAGE_QUERY,
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await getPage();

  if (!page) {
    return {};
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.image && page.seo.image.asset?._ref) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function NotFound() {
  const { data: page } = await getPage();

  return (
    <main>
      <h1 className="text-4xl font-bold">{page?.heading}</h1>
      <p className="mt-4 text-lg">{page?.subheading}</p>
      {page?.linkList && page.linkList.length > 0 && (
        <div className="mt-8 flex gap-4">
          {transformNavigationLinks(page.linkList).map((link: ExtendedNavigationLink, index: number) => (
            <Link
              key={index}
              href={link.url || (link.page?.slug ? `/${link.page.slug}` : "/")}
              className="text-black hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
