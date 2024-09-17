"use client"
import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-button'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import { IGalleryItem } from '@/lib/types'
import ImageSlide from './image-slide'
import VideoSlide from './video-slide'

type PropType = {
  slides: IGalleryItem[]
}

const MyCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [options, setOptions] = useState<EmblaOptionsType>({ loop: true, watchDrag: (slides.length - 1) != 0 })
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section>
      {slides.length > 1 ? (
        <div className="w-full flex justify-between items-end pb-1">

          <div className="grid grid-cols-2 gap-1 items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className='p-0.5 cursor-pointer rounded hover:bg-gray-200'
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className='p-0.5 cursor-pointer rounded hover:bg-gray-200'
            />
          </div>

          <div className="flex flex-wrap justify-end items-center space-x-1">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className='py-1'
              >
                <div
                  className={`h-[2px] w-[20px] transition-colors duration-300 ${index === selectedIndex ? "bg-gray-500" : "bg-gray-200"}`}
                />
              </DotButton>
            ))}
          </div>
        </div>
      ) : (
        <div className='pt-6'></div>
      )}

      <div className='h-[400px]] flex flex-col items-center justify-between overflow-hidden'>
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full  -ml-2">
            {slides.map((slide, index) => (
              <div className="shrink-0 basis-full max-w-full flex items-center justify-center pl-2" key={index}>
                {slide.type === "video" ? (
                  <VideoSlide slide={slide} />
                ) : (
                  <ImageSlide slide={slide} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCarousel
