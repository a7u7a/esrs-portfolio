import React from 'react'
import { IGalleryItem } from '@/lib/types'
import VideoPlayer from '@/components/free-looping-carousel/video-player'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  return (
    <VideoPlayer
      src={slide.src}
      poster={""}
      className='h-full rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]'
    />
  )
}

export default VideoSlide