import type { SchemaTypeDefinition } from "sanity";

import { authorType } from "./author-type";
import { blockContentType } from "./block-content-type";
import { categoryType } from "./category-type";
import { faqsType } from "./components/faqs-type";
import { featuresType } from "./components/features-type";
import { heroType } from "./components/hero-type";
import { textAndImageType } from "./components/text-and-image-type";
import { faqType } from "./faq-type";
import { pageBuilderType } from "./page-builder-type";
import { pageType } from "./page-type";
import { postType } from "./post-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    pageType,
    faqType,
    pageBuilderType,
    heroType,
    textAndImageType,
    featuresType,
    faqsType,
  ],
};
