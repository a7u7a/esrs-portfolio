import React, { useEffect, useRef, useState } from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
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
  }, []); // Added empty dependency array

  useEffect(() => {

    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [play])

  return (
    <video
      ref={videoRef}
      className='h-full rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]'
      playsInline
      muted
      loop
      src={slide.src}></video>
  )
}

export default VideoSlide