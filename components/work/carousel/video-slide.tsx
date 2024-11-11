import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  const play = true;
  return (
    <div className="w-full">
      <video autoPlay={play} playsInline muted loop className='' src={slide.src}></video>
    </div>
  )
}

export default VideoSlide