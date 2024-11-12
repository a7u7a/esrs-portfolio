import React from 'react'
import { IGalleryItem } from '@/lib/types'

interface ImageSlideProps {
  // slide: IGalleryItem
  slide: any
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  return (
    <div className="w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className='' src={slide.src} alt={slide.alt} />
    </div>
  )
}

export default ImageSlide