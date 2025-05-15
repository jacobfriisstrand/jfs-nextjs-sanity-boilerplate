import type { NextConfig } from "next";

import { fetchRedirects } from "@/sanity/lib/fetch-redirects";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.ts",
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  devIndicators: false,
  async redirects() {
    return await fetchRedirects();
  },
};

export default nextConfig;
