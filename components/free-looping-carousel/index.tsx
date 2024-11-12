"use client"
import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ImageSlide from './image-slide'
import VideoSlide from './video-slide'
import AutoScroll from 'embla-carousel-auto-scroll'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Slide from './slide'
import Link from 'next/link'

type PropType = {
  slides: any[]
}

const FreeLoopingCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [options, setOptions] = useState<EmblaOptionsType>({
    loop: true,
    dragFree: true,
    align: 'start'
  })
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, startDelay: 1000, speed: 0.7 }),
    WheelGesturesPlugin({ forceWheelAxis: "x" })
  ])

  return (
    <section>
      <div className={`w-full m-auto`}>
        {/* Embla Viewport */}
        <div
          ref={emblaRef}
          className={`overflow-hidden`}
        >
          {/* Embla Container */}
          <div id="embla-container" className="flex h-full my-4">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
              >
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
