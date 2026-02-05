import React, { useEffect, useState } from "react";
import { ICarouselItem } from "@/lib/types";
import { ArrowRight } from "@phosphor-icons/react";
import { useMediaQuery } from "@/lib/hooks";
import useMeasure from "react-use-measure";
import Link from "next/link";

interface SlideProps {
  children: React.ReactNode;
  slide: ICarouselItem;
}

const Slide = ({ children, slide }: SlideProps) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const [hover, setHovered] = useState(false);
  const [ref, bounds] = useMeasure();
  const [linkActive, setLinkActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const projectId = slide.projectRef?.id;
  const projectTitle = slide.projectRef?.title;

  useEffect(() => {
    if (isMd) {
      setLinkActive(true);
    } else {
      if (clicked) setLinkActive(true);
      else setLinkActive(false);
    }
  }, [isMd, clicked]);

  const hasProject = !!projectId;

  return (
    <LinkWrapper
      projectId={projectId || ""}
      isLink={hasProject && !slide.hideCaption && linkActive}
    >
      {/* // Embla Slide */}
      <div
        ref={ref}
        className="shrink-0 flex flex-col pl-4 text-sm md:text-hp-sm text-esrs-dark-gray"
      >
        <div
          className={`relative`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setClicked(!clicked)}
        >
          {/* Overlay */}
          <div
            className={`absolute rounded-lg inset-0 bg-black z-10 pointer-events-none transition-opacity duration-200 ${hover ? "opacity-20" : "opacity-0"}`}
          />

          {children}
          <div
            className={`text-esrs-gray p-1 z-20 absolute bottom-0 inset-x-0 w-full justify-center transition-opacity duration-200 ${hover ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-wrap gap-1">
              {projectTitle && <HintTitle text={projectTitle} />}
              {hasProject && !slide.hideCaption && <HintTitle arrow={true} />}
            </div>
          </div>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default Slide;

function LinkWrapper({
  children,
  projectId,
  isLink,
}: {
  children: React.ReactNode;
  projectId: string;
  isLink: boolean;
}) {
  // if (!isLink) return <>{children}</>
  return (
    <Link
      className={`${isLink ? "cursor-pointer" : "cursor-default"}`}
      href={isLink ? `/work?p=${projectId}` : ``}
      scroll={false}
    >
      {children}
    </Link>
  );
}

function HintTitle({
  text,
  arrow = false,
}: {
  text?: string;
  arrow?: boolean;
}) {
  return (
    <div
      className={`bg-black bg-opacity-50 px-1.5 py-0.5 rounded-[3px] flex items-center gap-1 mix-blend-difference`}
    >
      {text && <span className="text-white">{text}</span>}
      {arrow && <ArrowRight color={"white"} size={19} weight="bold" />}
    </div>
  );
}
