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
  const [loaded, setLoaded] = useState(false)
  const [ticToc, setTicToc] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loaded) {
        setTicToc(prev => !prev);
      } else {
        setTicToc(true);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [loaded]);

  const handleCanPlay = () => {
    setLoaded(true)
  }

  return (
    <div
      className={`
        h-[250px] sm:h-[300px] md:h-[450px] bg-hp-slide-bg rounded-lg
        max-w-[450px] sm:max-w-[530px] md:max-w-[800px]
        transition-opacity duration-700 ${ticToc ? 'opacity-100' : 'opacity-80'}
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
        src={slide.src}
      >
      </video>
    </div>
  )
}

export default VideoSlide