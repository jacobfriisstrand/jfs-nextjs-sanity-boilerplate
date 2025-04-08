import type { SchemaTypeDefinition } from "sanity";

import { faqType } from "./faq-type";
import { faqsType } from "./faqs-type";
import { featuresType } from "./features-type";
import { globalSettingsType } from "./global-settings-type";
import { heroType } from "./hero-type";
import { pageBuilderType } from "./page-builder-type";
import { pageType } from "./page-type";
import { richTextType } from "./rich-text-type";
import { textAndImageType } from "./text-and-image-type";

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
    globalSettingsType,
  ],
};
