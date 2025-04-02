import { defineQuery } from "next-sanity";

export const IMAGE_QUERY = defineQuery(`{
  ...,
  alt,
  asset-> {
    _id,
    _type,
    url,
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
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    },
    _type == "hero" => {
      ...,
      image ${IMAGE_QUERY}
    },
    _type == "textAndImage" => {
      ...,
      image ${IMAGE_QUERY}
    }
  }
}`);
