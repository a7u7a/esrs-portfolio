"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ImageSlide from "./image-slide";
import VideoSlide from "./video-slide";
import AutoScroll from "embla-carousel-auto-scroll";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Slide from "./slide";
import { ICarouselItem } from "@/lib/types";

type PropType = {
  slides: ICarouselItem[];
  autoScroll?: boolean;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, autoScroll = true } = props;
  const [options] = useState<EmblaOptionsType>({
    loop: true,
    dragFree: true,
    align: "start",
  });
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: autoScroll, startDelay: 1000, speed: 0.7 }),
    WheelGesturesPlugin({ forceWheelAxis: "x" }),
  ]);

  return (
    <section>
      <div className={`w-full m-auto`}>
        {/* Embla Viewport */}
        <div ref={emblaRef} className={`overflow-hidden`}>
          {/* Embla Container */}
          <div id="embla-container" className="flex h-full my-4">
            {slides.map((slide, index) => (
              <Slide key={slide._key || slide._id || index} slide={slide}>
                {slide.mediaType === "video" ? (
                  <VideoSlide slide={slide} />
                ) : (
                  <ImageSlide slide={slide} />
                )}
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
