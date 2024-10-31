import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface ImageSlideProps {
  // slide: IGalleryItem
  slide: any
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  return (
    <div className='h-[250px] md:h-[450px]'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className='h-full rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]' src={slide.src}
      // alt={slide.alt} 
      />
    </div>
  )
}

export default ImageSlide