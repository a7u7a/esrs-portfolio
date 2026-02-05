import React, { useEffect, useRef, useState } from "react";
import { ISanityGalleryItem } from "@/lib/types";
import { fileUrl } from "@/sanity/lib/image";

interface VideoSlideProps {
  slide: ISanityGalleryItem;
  selectedIndex: number;
  index: number;
}

const VideoSlide = ({ slide, selectedIndex, index }: VideoSlideProps) => {
  const [mounted, setMounted] = useState(false);
  const width = slide.width || 800;
  const height = slide.height || 600;
  const aspectRatio = width / height;
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = fileUrl(slide.video);

  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (selectedIndex === index) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [selectedIndex, index]);

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !videoSrc) return null;

  return (
    <div className={`h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]`}>
      <video
        ref={videoRef}
        className={`h-full object-contain lg:object-cover`}
        playsInline
        muted
        loop
        preload="false"
        src={videoSrc}
      ></video>
    </div>
  );
};

export default VideoSlide;
