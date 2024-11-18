import React, { useState, useEffect } from 'react'
import { IGalleryItem } from '@/lib/types'
import Image from 'next/image'

interface ImageSlideProps {
  slide: IGalleryItem
  index: number
}

const ImageSlide = ({ slide, index }: ImageSlideProps) => {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const aspectRatio = slide.dims?.width! / slide.dims?.height!
  const handleLoad = () => {
    setLoaded(true)
  }
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) return null;
  return (
    <div
      className={`
      h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
      transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}
    `}
      style={{ backgroundColor: slide.bgColor }}
    // style={{ aspectRatio: aspectRatio }}
    >
      <Image
        priority={index === 0}
        onLoad={handleLoad}
        className='h-full object-cover'
        src={slide.src}
        alt={slide.alt}
        height={slide.dims?.height}
        width={slide.dims?.width}
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
    </div>
  )
}

export default ImageSlide