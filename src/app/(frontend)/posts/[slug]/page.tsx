import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ResponsiveImage } from "@/components/ui/responsive-image";
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
        <ResponsiveImage
          image={post.mainImage}
          className="aspect-[2/1]"
          priority
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
