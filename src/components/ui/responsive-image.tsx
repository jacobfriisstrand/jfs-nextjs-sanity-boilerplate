import type { ImageProps } from "next/image";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

export type SanityImageAsset = {
  _id: string;
  url: string;
  path: string;
  assetId: string;
  extension: string;
  metadata?: {
    lqip?: string;
  };
};

type SanityImageObject = {
  _type: "image";
  asset: {
    _id: string;
    _type: "sanity.imageAsset";
    url: string | null;
    metadata: {
      lqip: string | null;
      dimensions: {
        aspectRatio: number | null;
        height: number | null;
        width: number | null;
      } | null;
    } | null;
  } | null;
  hotspot: {
    x: number | null;
    y: number | null;
    height: number | null;
    width: number | null;
  } | null;
  crop: {
    top: number | null;
    bottom: number | null;
    left: number | null;
    right: number | null;
  } | null;
  alt?: string;
};

type ResponsiveImageProps = Omit<ImageProps, "src" | "alt" | "fill" | "sizes" | "placeholder" | "blurDataURL"> & {
  image: SanityImageObject;
  className: string;
  priority?: boolean;
  builder?: (builder: ReturnType<typeof urlFor>) => ReturnType<typeof urlFor>;
};

function defaultBuilder(builder: ReturnType<typeof urlFor>) {
  return builder
    .quality(85)
    .auto("format")
    .fit("scale");
}

export function ResponsiveImage({
  image,
  className,
  priority = false,
  builder = defaultBuilder,
  ...props
}: ResponsiveImageProps) {
  if (!image?.asset)
    return null;

  const imageUrl = builder(urlFor(image)).url();
  const lqip = image.asset.metadata?.lqip;

  return (
    <div className={cn("relative w-full", className)}>
      <Image
        {...props}
        src={imageUrl}
        alt={image.alt || ""}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, (max-width: 1200px) 100vw, (max-width: 1920px) 100vw, 1920px"
        priority={priority}
        {...(lqip
          ? {
              placeholder: "blur",
              blurDataURL: lqip,
            }
          : {})}
        className="object-cover"
      />
    </div>
  );
}
