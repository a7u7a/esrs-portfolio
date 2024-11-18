import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IGalleryItem } from '@/lib/types'

interface ImageSlideProps {
  slide: IGalleryItem
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  const aspectRatio = slide.dims?.width! / slide.dims?.height!
  const [loaded, setLoaded] = useState(false)
  const [ticToc, setTicToc] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loaded) {
        setTicToc(prev => !prev);
      } else {
        setTicToc(true);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [loaded]);

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div
      className={`
        h-[250px] sm:h-[300px] md:h-[450px] bg-hp-slide-bg rounded-lg   
        max-w-[450px] sm:max-w-[530px] md:max-w-[800px]
        transition-opacity duration-700 ${ticToc ? 'opacity-100' : 'opacity-80'}
      `}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        onLoad={handleLoad}
        className='h-full rounded-lg drop-shadow-5'
        src={slide.src}
        alt={slide.alt}
        height={slide.dims?.height}
        width={slide.dims?.width}
        sizes="(max-width: 640px) 450px, (max-width: 768px) 530px, 800px"
      />
    </div>
  )
}

export default ImageSlide