import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ISanityFileAsset, ISanityImageAsset } from "@/lib/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const fileUrl = (
  asset: ISanityFileAsset | undefined
): string | undefined => {
  return asset?.url;
};

export const imageUrl = (
  asset: ISanityImageAsset | undefined
): string | undefined => {
  return asset?.url;
};

export const getImageDimensions = (asset: ISanityImageAsset | undefined) => {
  return asset?.metadata?.dimensions;
};
