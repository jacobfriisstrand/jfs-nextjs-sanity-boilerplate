import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SanityImage } from "@/components/ui/sanity-image";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portable-text-components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage && (
        <SanityImage
          image={post.mainImage}
          priority
          aspectRatio={16 / 9}
          alt={post.mainImage.alt}
        />
      )}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post?.body
        ? (
            <div className="prose">
              <PortableText value={post.body} components={components} />
            </div>
          )
        : null}
      <hr />

      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
