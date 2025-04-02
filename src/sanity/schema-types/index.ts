import type { SchemaTypeDefinition } from "sanity";

import { faqsType } from "./component-schema-types/faqs-type";
import { featuresType } from "./component-schema-types/features-type";
import { heroType } from "./component-schema-types/hero-type";
import { textAndImageType } from "./component-schema-types/text-and-image-type";
import { faqType } from "./faq-type";
import { pageBuilderType } from "./page-builder-type";
import { pageType } from "./page-type";
import { richTextType } from "./rich-text-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    richTextType,
    pageType,
    faqType,
    pageBuilderType,
    heroType,
    textAndImageType,
    featuresType,
    faqsType,
  ],
};
