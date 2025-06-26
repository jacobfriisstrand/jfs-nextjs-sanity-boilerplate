import { defineField, defineType } from "sanity";

import { client } from "@/sanity/lib/client";
import { basePageBuilder } from "@/sanity/schema-types/page-templates/base-page-builder";

import { basePageType } from "./base-page-type";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-03-26";

export const studioClient = client.withConfig({ apiVersion });

const pageTypeTwoModules = ["hero", "textAndImage", "features", "faqs"];

export const pageTypeTwoType = defineType({
  name: "pageTypeTwo",
  title: "Page type two",
  type: "document",
  icon: () => "📄",
  fields: [
    ...basePageType.fields,
    defineField({
      ...basePageBuilder(pageTypeTwoModules),
    }),
  ],
  preview: basePageType.preview,
});
