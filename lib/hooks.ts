import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";

export const linearMap = (val: number, fromA: number, fromB: number, toA: number, toB: number) => {
  return ((val - fromA) * (toB - toA)) / (fromB - fromA) + toA;
}

export const useMouseAngle = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate viewport center
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight;

      // Get mouse position relative to center
      const mouseX = event.clientX - centerX;
      const mouseY = centerY - event.clientY; // Invert Y for standard math coordinates

      // Calculate angle in radians
      let angleRad = Math.atan2(mouseY, mouseX);

      // Convert to degrees and normalize to 0-360 range
      let angleDeg = (angleRad * 180) / Math.PI;
      if (angleDeg < 0) {
        angleDeg += 360;
      }

      setAngle(Math.abs(angleDeg - 180));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return linearMap(angle, 0, 180, 15, 75);
};


export const useScrollProgress = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const desiredSegmentLength = isMd ? 2500 : 1000;
  const container = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    function getTurns() {
      const bodyHeight = document.documentElement.scrollHeight - window.innerHeight;
      const segments = Math.round(bodyHeight / desiredSegmentLength);
      return Math.max(1, segments);
    }

    const setupScrollTrigger = () => {
      const turns = getTurns();
      if (!container.current) return;
      const proxy = { progress: 0 };
      gsap.to(proxy, {
        ease: "none",
        progress: 1,
        onUpdate: () => {
          const p = (proxy.progress * turns * 100) / 100;
          setScrollProgress(p);
        },
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            scrollTriggerRef.current = self;
          },
        }
      });
    }
    setTimeout(setupScrollTrigger, 1000);
  }, { scope: container });

  return { container, scrollProgress, scrollTriggerRef };
};


export const useRotationSpeed = (currentAngle: number) => {
  const [rotationSpeed, setRotationSpeed] = useState<number>(0);
  const lastAngle = useRef<number>(currentAngle);
  const lastTimestamp = useRef<number>(performance.now());

  useEffect(() => {
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastTimestamp.current) / 1000;

    let deltaAngle = currentAngle - lastAngle.current;

    if (deltaAngle > 180) {
      deltaAngle -= 360;
    } else if (deltaAngle < -180) {
      deltaAngle += 360;
    }

    const scale = 1.2
    const newRotationSpeed = Math.abs((deltaAngle / deltaTime) * scale);

    lastAngle.current = currentAngle;
    lastTimestamp.current = currentTime;

    setRotationSpeed(newRotationSpeed);
  }, [currentAngle]);

  return rotationSpeed;
}

// from https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
