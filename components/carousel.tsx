import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { IGalleryItem } from '@/lib/types'
import Image from 'next/image'

interface CarouselProps {
  gallery: IGalleryItem[]
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ gallery }: CarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, gallery.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div>
      <div className="flex w-full justify-end">
        <div className="flex">
          <div className="cursor-pointer" onClick={() => paginate(1)}>
            {"←"}
          </div>
          <div className="cursor-pointer" onClick={() => paginate(-1)}>
            {"→"}
          </div>
        </div>
      </div>
      <div className="relative h-[562px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            className="absolute"
            src={gallery[imageIndex].src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Carousel