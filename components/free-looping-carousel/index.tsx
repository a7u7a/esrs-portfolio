"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ImageSlide from './image-slide'
import VideoSlide from './video-slide'
import AutoScroll from 'embla-carousel-auto-scroll'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Slide from './slide'

type PropType = {
  slides: any[]
}

const FreeLoopingCarousel: React.FC<PropType> = (props) => {
  const [collapsed, setCollapsed] = useState<number | null>(null);
  const { slides } = props
  const [options, setOptions] = useState<EmblaOptionsType>({ loop: true, dragFree: true, align: 'start' })
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, startDelay: 1000, speed: 0.7 }),
    WheelGesturesPlugin({ forceWheelAxis: "x" })
  ])

  const onClickSlide = (index: number) => {
    if (collapsed === index) {
      setCollapsed(null)
    } else if (!slides[index].hideMore) {
      setCollapsed(index)
    }
  }

  return (
    <section>
      <div className='w-full m-auto'>
        {/* Embla Viewport */}
        <div
          ref={emblaRef}
          className={`overflow-hidden`}
        >
          {/* Embla Container */}
          <div className="flex h-full pt-4 pb-28">
            {slides.map((slide, index) => (
              <Slide emblaApi={emblaApi} onClickSlide={onClickSlide} index={index} key={index} slide={slide} collapsed={index === collapsed}>
                {slide.type === "video" ? <VideoSlide slide={slide} /> : <ImageSlide slide={slide} />}
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeLoopingCarousel
