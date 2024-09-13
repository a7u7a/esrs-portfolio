import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  return (
    <div className="h-full">
      <video autoPlay playsInline muted loop className='h-full object-contain' src={slide.src}></video>
    </div>
  )
}

export default VideoSlide