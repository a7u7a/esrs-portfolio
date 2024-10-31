import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface VideoSlideProps {
  slide: IGalleryItem
}

const VideoSlide = ({ slide }: VideoSlideProps) => {
  const play = true;
  return (
    <div className='h-[250px] md:h-[450px]'>
      <video
        className='h-full rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]'
        autoPlay={play}
        playsInline
        muted
        loop
        src={slide.src}></video>
    </div>
  )
}

export default VideoSlide