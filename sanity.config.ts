"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { resolve } from "@/sanity/presentation/resolve";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema-types";
import { structure } from "./src/sanity/structure";

export default defineConfig([
  {
    name: "production",
    title: isDev ? "Production" : "Grund CPH",
    basePath: "/admin",
    projectId,
    dataset: "production",
    plugins: [
      structureTool({ structure }),
      presentationTool({
        resolve,
        previewUrl: {
          previewMode: {
            enable: "/api/draft-mode/enable",
          },
        },
      }),
    ],
    schema,
    document: {
      newDocumentOptions: prev => prev.filter(item => item.templateId !== "globalSettings"),
    },
  },
  // TODO: set up testing environment?
  {
    name: "development",
    title: "Development",
    basePath: "/admin-dev",
    projectId,
    dataset: "development",
    plugins: [
      structureTool({ structure }),
      visionTool({ defaultApiVersion: apiVersion }),
      presentationTool({
        resolve,
        previewUrl: {
          previewMode: {
            enable: "/api/draft-mode/enable",
          },
        },
      }),
    ],
    schema,
    document: {
      newDocumentOptions: prev => prev.filter(item => item.templateId !== "globalSettings"),
    },
  },
]);
