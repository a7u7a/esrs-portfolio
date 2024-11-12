import React, { useEffect, useRef, useState } from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  const aspectRatio = slide.dims?.width! / slide.dims?.height!
  if (!aspectRatio) throw new Error(`Missing aspect ratio in: ${slide.src}`)
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  const threshold = 0.05;

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
  }, [play])

  return (
    <div
      className={`
      h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#ebebeb] 
      transition-opacity duration-300
      `}
    // style={{ aspectRatio: aspectRatio }}
    >
      <video
        ref={videoRef}
        className={`h-full object-contain`}
        playsInline
        muted
        loop
        preload="false"
        src={slide.src}
      >
      </video>
    </div>
  )
}

export default VideoSlide