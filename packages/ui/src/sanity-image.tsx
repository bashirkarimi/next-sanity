"use client";
import Image from "next/image";
import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const configuredSanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const SanityImage = ({ data }: SanityImageSource) => {
  const imageProps = useNextSanityImage(configuredSanityClient, data);

  return (
    <div>
      <Image {...imageProps} alt="Sanity Image" width={300} height={200} />
    </div>
  );
};

export { SanityImage };
