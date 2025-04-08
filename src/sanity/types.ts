/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type TextAndImage = {
  _type: "textAndImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    caption?: string;
    _type: "imageFieldType";
  };
};

export type RichText = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  caption?: string;
  _type: "imageFieldType";
  _key: string;
}>;

export type Redirect = {
  _id: string;
  _type: "redirect";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  source?: string;
  destination?: string;
  permanent?: boolean;
  isEnabled?: boolean;
};

export type PageBuilder = Array<{
  _key: string;
} & Hero | {
  _key: string;
} & TextAndImage | {
  _key: string;
} & Features | {
  _key: string;
} & Faqs>;

export type Hero = {
  _type: "hero";
  title?: string;
  text?: RichText;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    caption?: string;
    _type: "imageFieldType";
  };
};

export type ImageFieldType = {
  _type: "imageFieldType";
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  caption?: string;
};

export type GlobalSettings = {
  _id: string;
  _type: "globalSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  homePage?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo?: Seo;
  title?: string;
  slug?: Slug;
  content?: PageBuilder;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  noIndex?: boolean;
};

export type Features = {
  _type: "features";
  title?: string;
  features?: Array<{
    title?: string;
    text?: string;
    _type: "feature";
    _key: string;
  }>;
};

export type Faqs = {
  _type: "faqs";
  title?: string;
  faqs?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faq";
  }>;
};

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  body?: RichText;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | TextAndImage | RichText | Redirect | PageBuilder | Hero | ImageFieldType | GlobalSettings | Page | Slug | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Seo | Features | Faqs | Faq;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{  ...,    "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },  content[]{  ...,  _type == "faqs" => {    ...,    faqs[]->{    _id,    title,    body,    "text": pt::text(body)}  },  _type == "hero" => {    ...,    image {  ...,  alt,  asset-> {    _id,    _type,    url,    dimensions {      _type,      aspectRatio,      height,      width    }  }}  },  _type == "textAndImage" => {    ...,    image {  ...,  alt,  asset-> {    _id,    _type,    url,    dimensions {      _type,      aspectRatio,      height,      width    }  }}  }}}
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  seo: {
    title: string | "";
    description: string | "";
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    noIndex: boolean | false;
  };
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "faqs";
    title?: string;
    faqs: Array<{
      _id: string;
      title: string | null;
      body: RichText | null;
      text: string;
    }> | null;
  } | {
    _key: string;
    _type: "features";
    title?: string;
    features?: Array<{
      title?: string;
      text?: string;
      _type: "feature";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "hero";
    title?: string;
    text?: RichText;
    image: {
      asset: {
        _id: string;
        _type: "sanity.imageAsset";
        url: string | null;
        dimensions: null;
      } | null;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string | null;
      caption?: string;
      _type: "imageFieldType";
    } | null;
  } | {
    _key: string;
    _type: "textAndImage";
    orientation?: "imageLeft" | "imageRight";
    title?: string;
    image: {
      asset: {
        _id: string;
        _type: "sanity.imageAsset";
        url: string | null;
        dimensions: null;
      } | null;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt: string | null;
      caption?: string;
      _type: "imageFieldType";
    } | null;
  }> | null;
} | null;
// Variable: HOME_PAGE_QUERY
// Query: *[_id == "globalSettings"][0]{    homePage->{      ...,        "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },      content[]{  ...,  _type == "faqs" => {    ...,    faqs[]->{    _id,    title,    body,    "text": pt::text(body)}  },  _type == "hero" => {    ...,    image {  ...,  alt,  asset-> {    _id,    _type,    url,    dimensions {      _type,      aspectRatio,      height,      width    }  }}  },  _type == "textAndImage" => {    ...,    image {  ...,  alt,  asset-> {    _id,    _type,    url,    dimensions {      _type,      aspectRatio,      height,      width    }  }}  }}    }  }
export type HOME_PAGE_QUERYResult = {
  homePage: null;
} | {
  homePage: {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    seo: {
      title: string | "";
      description: string | "";
      image: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      } | null;
      noIndex: boolean | false;
    };
    title?: string;
    slug?: Slug;
    content: Array<{
      _key: string;
      _type: "faqs";
      title?: string;
      faqs: Array<{
        _id: string;
        title: string | null;
        body: RichText | null;
        text: string;
      }> | null;
    } | {
      _key: string;
      _type: "features";
      title?: string;
      features?: Array<{
        title?: string;
        text?: string;
        _type: "feature";
        _key: string;
      }>;
    } | {
      _key: string;
      _type: "hero";
      title?: string;
      text?: RichText;
      image: {
        asset: {
          _id: string;
          _type: "sanity.imageAsset";
          url: string | null;
          dimensions: null;
        } | null;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string | null;
        caption?: string;
        _type: "imageFieldType";
      } | null;
    } | {
      _key: string;
      _type: "textAndImage";
      orientation?: "imageLeft" | "imageRight";
      title?: string;
      image: {
        asset: {
          _id: string;
          _type: "sanity.imageAsset";
          url: string | null;
          dimensions: null;
        } | null;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string | null;
        caption?: string;
        _type: "imageFieldType";
      } | null;
    }> | null;
  } | null;
} | null;
// Variable: REDIRECTS_QUERY
// Query: *[_type == "redirect" && isEnabled == true] {      source,      destination,      permanent  }
export type REDIRECTS_QUERYResult = Array<{
  source: string | null;
  destination: string | null;
  permanent: boolean | null;
}>;
// Variable: OG_IMAGE_QUERY
// Query: *[_id == $id][0]{    title,    "image": seo.image {      ...,      asset-> {        _id,        _type,        url,        metadata {          palette        }      }    }  }
export type OG_IMAGE_QUERYResult = {
  title: null;
  image: null;
} | {
  title: string | null;
  image: null;
} | {
  title: string | null;
  image: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
      url: string | null;
      metadata: {
        palette: SanityImagePalette | null;
      } | null;
    } | null;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
} | null;
// Variable: SITEMAP_QUERY
// Query: *[_type in ["page"] && defined(slug.current)] {    "href": select(      _type == "page" => "/" + slug.current,      slug.current    ),    _updatedAt}
export type SITEMAP_QUERYResult = Array<{
  href: string | null;
  _updatedAt: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"page\" && slug.current == $slug][0]{\n  ...,\n  \n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n\n  content[]{\n  ...,\n  _type == \"faqs\" => {\n    ...,\n    faqs[]->{\n    _id,\n    title,\n    body,\n    \"text\": pt::text(body)\n}\n\n  },\n  _type == \"hero\" => {\n    ...,\n    image {\n  ...,\n  alt,\n  asset-> {\n    _id,\n    _type,\n    url,\n    dimensions {\n      _type,\n      aspectRatio,\n      height,\n      width\n    }\n  }\n}\n  },\n  _type == \"textAndImage\" => {\n    ...,\n    image {\n  ...,\n  alt,\n  asset-> {\n    _id,\n    _type,\n    url,\n    dimensions {\n      _type,\n      aspectRatio,\n      height,\n      width\n    }\n  }\n}\n  }\n}\n}": PAGE_QUERYResult;
    "*[_id == \"globalSettings\"][0]{\n    homePage->{\n      ...,\n      \n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n\n      content[]{\n  ...,\n  _type == \"faqs\" => {\n    ...,\n    faqs[]->{\n    _id,\n    title,\n    body,\n    \"text\": pt::text(body)\n}\n\n  },\n  _type == \"hero\" => {\n    ...,\n    image {\n  ...,\n  alt,\n  asset-> {\n    _id,\n    _type,\n    url,\n    dimensions {\n      _type,\n      aspectRatio,\n      height,\n      width\n    }\n  }\n}\n  },\n  _type == \"textAndImage\" => {\n    ...,\n    image {\n  ...,\n  alt,\n  asset-> {\n    _id,\n    _type,\n    url,\n    dimensions {\n      _type,\n      aspectRatio,\n      height,\n      width\n    }\n  }\n}\n  }\n}\n    }\n  }": HOME_PAGE_QUERYResult;
    "\n  *[_type == \"redirect\" && isEnabled == true] {\n      source,\n      destination,\n      permanent\n  }\n": REDIRECTS_QUERYResult;
    "\n  *[_id == $id][0]{\n    title,\n    \"image\": seo.image {\n      ...,\n      asset-> {\n        _id,\n        _type,\n        url,\n        metadata {\n          palette\n        }\n      }\n    }\n  }    \n": OG_IMAGE_QUERYResult;
    "\n*[_type in [\"page\"] && defined(slug.current)] {\n    \"href\": select(\n      _type == \"page\" => \"/\" + slug.current,\n      slug.current\n    ),\n    _updatedAt\n}\n": SITEMAP_QUERYResult;
  }
}
