"use client"
import React, { useState, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-button'
import { usePrevNextButtons } from './arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import { IGalleryItem } from '@/lib/types'
import ImageSlide from './image-slide'
import VideoSlide from './video-slide'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: any[]
}

const FreeLoopingCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [options, setOptions] = useState<EmblaOptionsType>({ loop: true, dragFree: true })
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section>
      <div className='w-full m-auto'>
        {/* Embla Viewport */}
        <div ref={emblaRef} className={`overflow-hidden`} >
          {/* Embla Container */}
          <div className="flex h-full pt-4 pb-8 -ml-2">
            {slides.map((slide, index) => (
              // Embla Slide
              <div key={index}
                className="shrink-0 flex pl-2"
              >
                {slide.type === "video" ? <VideoSlide slide={slide} /> : <ImageSlide slide={slide} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeLoopingCarousel
