import { defineQuery } from "next-sanity";

const IMAGE_QUERY = `{
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
}`;

const SEO_QUERY = `
  "seo": {
    "title": seo.title,
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
`;

// TODO: FIx the pagebuilder data not rendering in the frontend
const CONTENT_QUERY = `pageBuilder[]{
  ...,
  _type == "faqs" => {
    ...,
    faqs[]->{
    _id,
    title,
    body,
    "text": pt::text(body)
}
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

// The $pageTypes is an array of page types that are allowed to be queried.
// This array is defined in the constants/page-types.ts file.
// The $slug is the slug of the page that is being queried.
// These parameters are passed in the homepage page.tsx and the [slug]/page.tsx files.
export const PAGE_QUERY = defineQuery(`*[_type in $pageTypes && slug.current == $slug][0]{
  ...,
  ${SEO_QUERY}
  ${CONTENT_QUERY}
}`);

export const NAVIGATION_QUERY = defineQuery(`*[_type == "navigation"][0]{
  ...,
  leftMenu[]{
    _type,
    "label": select(label == null => undefined, label),
    "linkType": select(linkType == null => undefined, linkType),
    "url": select(url == null => undefined, url),
    "page": page->{
      _id,
      _type
    }
  },
  rightMenu[]{
    _type,
    "label": select(label == null => undefined, label),
    "linkType": select(linkType == null => undefined, linkType),
    "url": select(url == null => undefined, url),
    "page": page->{
      _id,
      _type
    }
  }
}`);

export const FOOTER_QUERY = defineQuery(`*[_type == "globalSettings"][0]{
  companyName,
  copyright,
  vatNumberObject {
    vatNumberHeading,
    vatNumber
  },
  socialLinks {
    ...,
  },
  contactInfo {
    phone,
    email
  },
  address {
    streetName,
    streetNumber,
    floor,
    city,
    zipCode
  }
}`);

export const CONTACT_INFO_QUERY = defineQuery(`*[_type == "globalSettings"][0]{
  contactInfo {
    phone,
    email
  }
}`);

// TODO: Change the home page query, as it is not in the globalSettings anymore.
export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homePage"][0]{
    ...,
    ${SEO_QUERY}
    ${CONTENT_QUERY}
  }`);

export const REDIRECTS_QUERY = defineQuery(`
  *[_type == "redirect" && isEnabled == true] {
      source,
      destination,
      permanent
  }
`);

export const OG_IMAGE_QUERY = defineQuery(`
  *[_id == $id][0]{
    title,
    "image": seo.image {
      ...,
      asset-> {
        _id,
        _type,
        url,
        metadata {
          palette
        }
      }
    }
  }    
`);

export const SITEMAP_QUERY = defineQuery(`
*[_type in $pageTypes && defined(slug.current)] {
    "href": select(
      _type == $pageTypes[0] => "/" + slug.current,
      slug.current
    ),
    _updatedAt
}
`);
