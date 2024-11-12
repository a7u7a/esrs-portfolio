import React, { useState } from 'react'
import { IGalleryItem } from '@/lib/types'
import Image from 'next/image'

interface ImageSlideProps {
  // slide: IGalleryItem
  slide: any
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = slide.dims?.width! / slide.dims?.height!
  const handleLoad = () => {
    setLoaded(true)
  }
  return (
    <div
      className={`
      h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#ebebeb]
      transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}
    `}
      // style={{ aspectRatio: aspectRatio }}
    >
      <Image
        onLoad={handleLoad}
        className='h-full object-contain'
        src={slide.src}
        alt={slide.alt}
        height={slide.dims?.height}
        width={slide.dims?.width}
      />
    </div>
  )
}

export default ImageSlide