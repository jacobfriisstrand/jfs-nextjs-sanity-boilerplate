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

const CONTENT_QUERY = `content[]{
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
}`;

export const PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  ${CONTENT_QUERY}
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "globalSettings"][0]{
    homePage->{
      ...,
      ${CONTENT_QUERY}
    }
  }`);
