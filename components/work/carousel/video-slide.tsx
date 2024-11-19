import React, { useEffect, useRef, useState } from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
  selectedIndex: number
  index: number
}

const VideoSlide = ({ slide, selectedIndex, index }: VideoSlideProps) => {
  const [mounted, setMounted] = useState(false);
  const aspectRatio = slide.dims?.width! / slide.dims?.height!
  if (!aspectRatio) throw new Error(`Missing aspect ratio in: ${slide.src}`)
  const videoRef = useRef<HTMLVideoElement>(null);

  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (selectedIndex === index) {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }, [selectedIndex, index])

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play])

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  return (
    <div
      className={`
      h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
      `}
    // style={{ aspectRatio: aspectRatio }}
    >
      <video
        ref={videoRef}
        className={`h-full object-cover`}
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