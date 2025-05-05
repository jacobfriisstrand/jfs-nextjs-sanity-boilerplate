import { defineField, defineType } from "sanity";

import { client } from "@/sanity/lib/client";
import { basePageBuilder } from "@/sanity/schema-types/page-templates/base-page-builder";

import { basePageType } from "./base-page-type";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-03-26";

export const studioClient = client.withConfig({ apiVersion });

const genericPageModules = ["hero", "textAndImage", "features", "faqs"];

export const genericPageType = defineType({
  name: "genericPage",
  title: "Generic Page",
  type: "document",
  icon: () => "📄",
  fields: [
    ...basePageType.fields,
    defineField({
      ...basePageBuilder(genericPageModules),
    }),
  ],
  preview: basePageType.preview,
});
