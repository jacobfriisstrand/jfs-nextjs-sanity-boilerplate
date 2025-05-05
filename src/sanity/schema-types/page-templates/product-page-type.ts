import { defineField, defineType } from "sanity";

import { client } from "@/sanity/lib/client";

import { basePageBuilder } from "./base-page-builder";
import { basePageType } from "./base-page-type";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-03-26";

export const studioClient = client.withConfig({ apiVersion });

const productPageModules = ["hero", "textAndImage", "features", "faqs"];

export const productPageType = defineType({
  name: "productPage",
  title: "Product Page",
  type: "document",
  icon: () => "🪑",
  fields: [
    ...basePageType.fields,
    defineField({
      ...basePageBuilder(productPageModules),
    }),
  ],
  preview: basePageType.preview,
});
