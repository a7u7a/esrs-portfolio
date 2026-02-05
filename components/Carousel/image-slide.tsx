import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ICarouselItem } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface ImageSlideProps {
  slide: ICarouselItem;
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  // For images, dimensions come from Sanity metadata
  const width = slide.image?.metadata?.dimensions?.width || 800;
  const height = slide.image?.metadata?.dimensions?.height || 600;
  const aspectRatio = width / height;
  const [loaded, setLoaded] = useState(false);
  const [ticToc, setTicToc] = useState(false);

  const imageUrl = slide.image ? urlFor(slide.image).url() : "";

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loaded) {
        setTicToc((prev) => !prev);
      } else {
        setTicToc(true);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [loaded]);

  const handleLoad = () => {
    setLoaded(true);
  };

  if (!imageUrl) return null;

  return (
    <div
      className={`
        h-[250px] sm:h-[300px] md:h-[450px] bg-hp-slide-bg rounded-lg   
        max-w-[450px] sm:max-w-[530px] md:max-w-[800px]
        transition-opacity duration-700 ${ticToc ? "opacity-100" : "opacity-80"}
      `}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        onLoad={handleLoad}
        className="h-full rounded-lg drop-shadow-5"
        src={imageUrl}
        alt={slide.alt}
        height={height}
        width={width}
        sizes="(max-width: 640px) 450px, (max-width: 768px) 530px, 800px"
      />
    </div>
  );
};

export default ImageSlide;
