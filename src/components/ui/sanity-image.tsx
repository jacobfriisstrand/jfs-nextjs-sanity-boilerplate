import type { ImageProps } from "next/image";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

type SanityImage = {
  asset: {
    _id: string;
    _type: "sanity.imageAsset";
    url: string;
    metadata: {
      lqip: string;
    };
    dimensions: {
      _type: "sanity.imageDimensions";
      aspectRatio: number;
      height: number;
      width: number;
    };
  };
  alt: string;
};

type SanityImageProps = Omit<ImageProps, "src"> & {
  image: SanityImage;
  quality?: number;
  aspectRatio?: number;

};

export function SanityImage({
  image,
  quality = 80,
  aspectRatio,

  className,
  ...props
}: SanityImageProps) {
  if (!image?.asset)
    return null;

  // Calculate dimensions based on aspect ratio
  let width = 800; // Default width
  let height = 600; // Default height

  if (aspectRatio) {
    // If aspect ratio is provided, calculate height based on width
    height = Math.round(width / aspectRatio);
  }
  else if (image.asset.dimensions) {
    // If no aspect ratio provided but we have original dimensions, use those
    width = image.asset.dimensions.width;
    height = image.asset.dimensions.height;
  }

  return (
    <Image
      className={cn(`aspect-[${width}/${height}] object-cover`, className)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      src={urlFor(image)
        .width(width)
        .height(height)
        .quality(Number(quality))
        .fit("max")
        .auto("format")
        .url()}
      width={width}
      height={height}
      {...props}
    />
  );
}
