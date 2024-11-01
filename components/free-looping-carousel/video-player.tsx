'use client'
import React, { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  poster: string
  className?: string
}

const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
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
  }, [play]);

  return (
    <video
      ref={videoRef}
      className={className}
      playsInline
      muted
      loop
      preload="none"
      poster={poster}
    >
      <source src={src} type="video/mp4"></source>
    </video>
  )
}

export default VideoPlayer
