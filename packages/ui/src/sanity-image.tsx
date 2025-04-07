"use client";

import Image from "next/image";
import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const configuredSanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true,
});

interface SanityImageProps {
  data: SanityImageSource;
}
console.log("Image", Image);

const SanityImage = ({ data }: SanityImageProps) => {
  const imageProps = useNextSanityImage(configuredSanityClient, data);

  if (!imageProps) {
    return <div>Image not available</div>;
  }

  return (
    <div>
      <Image
        {...imageProps}
        alt="Sanity Image"
        width={300}
        height={200}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw,  33vw"
      />
    </div>
  );
};

export { SanityImage };
