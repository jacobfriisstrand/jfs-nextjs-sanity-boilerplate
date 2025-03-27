import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { ImageProps } from "next/image";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

type SanityImageAsset = {
  _id: string;
  url: string;
  path: string;
  assetId: string;
  extension: string;
  metadata?: {
    lqip?: string;
  };
};

type SanityImageWithAlt = SanityImageObject & {
  alt?: string;
};

type ResponsiveImageProps = Omit<ImageProps, "src" | "alt" | "fill" | "sizes" | "placeholder" | "blurDataURL"> & {
  image: SanityImageWithAlt & { asset: SanityImageAsset };
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
  if (!image)
    return null;

  // Create the image URL while preserving all Sanity image settings
  const imageUrl = builder(urlFor(image)).url();

  console.log(image);

  return (
    <div className={cn("relative w-full", className)}>
      <Image
        {...props}
        src={imageUrl}
        alt={image.alt || ""}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 750px) 100vw, (max-width: 828px) 100vw, (max-width: 1080px) 100vw, (max-width: 1200px) 100vw, (max-width: 1920px) 100vw, 1920px"
        priority={priority}
        placeholder="blur"
        blurDataURL={image.asset.metadata?.lqip}
        className="object-cover"
      />
    </div>
  );
}
