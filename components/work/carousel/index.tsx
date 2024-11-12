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

type PropType = {
  slides: IGalleryItem[]
}

const ProjectCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [options, setOptions] = useState<EmblaOptionsType>({ loop: true, watchDrag: (slides.length - 1) != 0 })
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [showCustomCursor, setShowCustomCursor] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section>
      {slides.length > 1 ? (
        <div className="w-full flex justify-start pb-1 ">

          {/* Dashes navigation */}
          <div className="flex items-center space-x-1">
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
      ) : (null)}

      {/* Embla Carousel */}
      <div
        className={`w-full m-auto`}
        onMouseEnter={() => setShowCustomCursor(slides.length > 1 ? true : false)}
        onMouseLeave={() => setShowCustomCursor(false)}
      >
        <div
          ref={emblaRef}
          className={`overflow-hidden ${showCustomCursor ? 'cursor-none' : ''}`}
        >
          <div className="flex h-full w-full -ml-2">
            {slides.map((slide, index) => (
              <div key={index}
                onClick={onNextButtonClick}
                className="shrink-0 flex items-center justify-center pl-2"
              >
                {slide.type === "video" ? (
                  <VideoSlide slide={slide} />
                ) : (
                  <ImageSlide slide={slide} />
                )}
              </div>
            ))}
          </div>
        </div>
        {showCustomCursor && (
          <div
            className="fixed pointer-events-none z-50 mix-blend-difference"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <ArrowRight size={32} color="white" />
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectCarousel
