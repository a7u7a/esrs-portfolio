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
    className={`h-[250px] md:h-[450px] bg-[#ebebeb] transition-opacity duration-700 ${ticToc ? 'opacity-100' : 'opacity-80'}`}
    style={{ aspectRatio: aspectRatio }}
    >
      <Image
        onLoad={handleLoad}
        // className="h-[250px] md:h-[450px] object-contain"
        className='h-full'
        src={slide.src}
        alt={slide.alt}
        height={slide.dims?.height}
        width={slide.dims?.width}
      />
    </div>
  )
}

export default ImageSlide