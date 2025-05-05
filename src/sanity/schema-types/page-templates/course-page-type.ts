import { defineField, defineType } from "sanity";

import { client } from "@/sanity/lib/client";
import { basePageBuilder } from "@/sanity/schema-types/page-templates/base-page-builder";

import { basePageType } from "./base-page-type";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-03-26";

export const studioClient = client.withConfig({ apiVersion });

const coursePageModules = ["hero", "textAndImage", "features", "faqs"];

export const coursePageType = defineType({
  name: "coursePage",
  title: "Course Page",
  type: "document",
  icon: () => "🎓",
  fields: [
    ...basePageType.fields,
    defineField({
      ...basePageBuilder(coursePageModules),
    }),
  ],
  preview: basePageType.preview,
});
