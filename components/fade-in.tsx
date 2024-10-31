"use client"
import { useRef, useState, useEffect, ReactElement } from "react";

/**
 * Wrapper component for fade in transition effect.
 * Based on: https://stackoverflow.com/questions/59595700/how-to-make-a-react-component-fade-in-on-scroll-using-intersectionobserver-but
 */

interface FadeInProps {
  children: ReactElement;
  threshold: number;
  duration?: number; // Added duration prop
}

const FadeIn = ({ children, threshold, duration = 500 }: FadeInProps) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!domRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current!);
        }
      },
      { threshold: threshold }
    );

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []); // Added empty dependency array

  return (
    <div
      ref={domRef}
      className={`transition-all ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;