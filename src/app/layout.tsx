import "@/app/globals.css";

import type { Metadata } from "next";

import { groq } from "next-sanity";
import localFont from "next/font/local";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// TODO: Check if favicon and metadata should be here or in the (frontend) layout

async function getFavicon() {
  const globalSettings = await client.fetch(
    groq`*[_type == "globalSettings"][0]{
      favicon
    }`,
  );

  if (!globalSettings?.favicon) {
    return null;
  }

  return urlFor(globalSettings.favicon)
    .width(32)
    .height(32)
    .format("png")
    .url();
}

export async function generateMetadata(): Promise<Metadata> {
  const faviconUrl = await getFavicon();

  return {
    icons: faviconUrl
      ? {
          icon: faviconUrl,
          shortcut: faviconUrl,
          apple: faviconUrl,
        }
      : undefined,
  };
}

const plain = localFont({
  variable: "--font-plain",
  src: [
    {
      path: "../../public/fonts/plain-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/plain-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const bodoni = localFont({
  variable: "--font-bodoni",
  src: "../../public/fonts/bodoni.woff2",
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${plain.variable} ${bodoni.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
