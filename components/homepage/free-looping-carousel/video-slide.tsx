import React, { useEffect, useRef, useState } from "react";
import { ISanitySlide } from "@/lib/types";
import { fileUrl } from "@/sanity/lib/image";

interface VideoSlideProps {
  slide: ISanitySlide;
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  const width = slide.width || 800;
  const height = slide.height || 600;
  const aspectRatio = width / height;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  const threshold = 0.05;
  const [loaded, setLoaded] = useState(false);
  const [ticToc, setTicToc] = useState(false);

  const videoUrl = fileUrl(slide.video);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPlay(true);
        } else {
          setPlay(false);
        }
      },
      { threshold: threshold }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play]);

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

  const handleCanPlay = () => {
    setLoaded(true);
  };

  if (!videoUrl) return null;

  return (
    <div
      className={`
        h-[250px] sm:h-[300px] md:h-[450px] bg-hp-slide-bg rounded-lg
        max-w-[450px] sm:max-w-[530px] md:max-w-[800px]
        transition-opacity duration-700 ${ticToc ? "opacity-100" : "opacity-80"}
        `}
      style={{ aspectRatio: aspectRatio }}
    >
      <video
        onCanPlay={handleCanPlay}
        ref={videoRef}
        className={`h-full rounded-lg drop-shadow-5`}
        playsInline
        muted
        loop
        preload="false"
        src={videoUrl}
      ></video>
    </div>
  );
};

export default VideoSlide;
