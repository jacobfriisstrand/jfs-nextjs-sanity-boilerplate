import { defineQuery } from "next-sanity";

export const IMAGE_QUERY = defineQuery(`{
  ...,
  alt,
  asset-> {
    _id,
    _type,
    url,
    metadata {
      lqip
    },
    dimensions {
      _type,
      aspectRatio,
      height,
      width
    }
  }
}`);

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage ${IMAGE_QUERY}
}`);
