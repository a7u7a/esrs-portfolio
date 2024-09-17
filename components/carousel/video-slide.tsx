import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  const play = false;
  return (
    <div className="h-full">
      <video autoPlay={play} playsInline muted loop className='w-full object-contain' src={slide.src}></video>
    </div>
  )
}

export default VideoSlide