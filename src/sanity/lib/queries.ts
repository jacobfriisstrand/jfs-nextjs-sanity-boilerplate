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

export const PAGE_QUERY
  = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  content[]{
    ...,
    _type == "hero" => {
      _type,
      title,
      text,
      image ${IMAGE_QUERY}
    },
    _type == "textAndImage" => {
      _type,
      title,
      image ${IMAGE_QUERY},
      orientation
    },
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);
