"use client";
import React, { useState } from "react";
import { useRotationSpeed } from "@/lib/hooks";
import { useScrollProgress } from "@/lib/hooks";
import Link from "next/link";
import SpinningLogo from "@/components/SpinningLogo";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import {
  ISanityCollaborator,
  ISanitySlide,
  ISanityHomepageParagraph,
} from "@/lib/types";
import Footer from "@/components/Footer";

interface HomeProps {
  collaborators: ISanityCollaborator[];
  initialSlides: ISanitySlide[];
  beforeParagraphs: ISanityHomepageParagraph[];
  afterParagraphs: ISanityHomepageParagraph[];
}

const Home = ({
  collaborators,
  initialSlides,
  beforeParagraphs,
  afterParagraphs,
}: HomeProps) => {
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress);
  return (
    <main ref={container} className="pt-40 md:pt-44 m-auto">
      <FadeIn threshold={0.3}>
        <SpinningLogo
          rotationSpeed={rotationSpeed}
          scrollProgress={scrollProgress}
        />
      </FadeIn>

      {beforeParagraphs.length > 0 && (
        <TextWrapper>
          {beforeParagraphs.map((p, i) => (
            <div key={p._id} className={i > 0 ? "mt-16 md:mt-24" : ""}>
              <FadeIn threshold={0.3}>
                <span>{p.text}</span>
              </FadeIn>
            </div>
          ))}
        </TextWrapper>
      )}

      <FadeIn threshold={0.1}>
        <div className="flex flex-col my-16 md:mt-24 md:mb-18">
          <ToPortfolioButton />
          <Carousel slides={initialSlides} />
        </div>
      </FadeIn>

      <TextWrapper>
        {afterParagraphs.map((p, i) => (
          <div key={p._id} className={i > 0 ? "mt-16 md:mt-24" : ""}>
            <FadeIn threshold={0.3}>
              <div className="text-balance">
                <span>{p.text}</span>
              </div>
            </FadeIn>
          </div>
        ))}

        <div className={afterParagraphs.length > 0 ? "mt-16 md:mt-24" : ""}>
          <FadeIn threshold={0.3}>
            <span className="">{"People he's worked with:"}</span>
          </FadeIn>
          <ul className="list-none flex flex-col gap-3 pt-3 ml-3 md:ml-6 ">
            {collaborators.map((collab, i) => (
              <FadeIn key={collab._id} threshold={0.3}>
                <Collaborator collab={collab} />
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className="pt-20">
          <ul className="list-none flex flex-wrap gap-3 md:gap-6">
            <FadeIn threshold={0.3}>
              <li>
                <MoreInfoButton />
              </li>
            </FadeIn>
          </ul>
        </div>

        <FadeIn threshold={0.3}>
          <Footer className="pt-20 pb-32 text-hp-sm text-footer-text leading-loose" />
        </FadeIn>
      </TextWrapper>
    </main>
  );
};

export default Home;

function TextWrapper({ children }: { children: React.ReactNode }) {
  return <div className="px-4 flex flex-col max-w-[1000px]">{children}</div>;
}

const Collaborator = ({ collab }: { collab: ISanityCollaborator }) => {
  const [hover, setHovered] = useState(false);
  return (
    <li>
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="transition-colors ease-in-out duration-150 hover:text-esrs-hover"
        rel="noopener noreferrer"
        target="_blank"
        href={collab.url}
      >
        <span>{collab.name}</span>
      </Link>
    </li>
  );
};

const ToPortfolioButton = () => {
  return (
    <div className="px-4 text-footer-text text-hp-sm w-fit">
      <Link href="/work">
        <div>
          <span className="hover:text-esrs-hover">{"See all projects"}</span>
        </div>
      </Link>
    </div>
  );
};

const MoreInfoButton = () => {
  return (
    <Link href="/work">
      <div className="transition-colors ease-in-out duration-150 hover:text-esrs-hover">
        <span>{"Projects, About.."}</span>
      </div>
    </Link>
  );
};
