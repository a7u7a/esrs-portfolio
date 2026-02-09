"use client";
import React, { useState } from "react";
import { useRotationSpeed } from "@/lib/hooks";
import { useScrollProgress } from "@/lib/hooks";
import Link from "next/link";
import SpinningLogo from "@/components/SpinningLogo";
import Carousel from "@/components/Carousel";
import CV from "@/components/CV";
import CVContact from "@/components/CV/Contact";
import FadeIn from "@/components/FadeIn";
import {
  ISanityCollaborator,
  ISanitySlide,
  ISanityHomepageParagraph,
  ISanityEducation,
  ISanityPublication,
  ISanityService,
  ISanitySocial,
} from "@/lib/types";
import Footer from "@/components/Footer";

interface HomeProps {
  collaborators: ISanityCollaborator[];
  initialSlides: ISanitySlide[];
  beforeParagraphs: ISanityHomepageParagraph[];
  afterParagraphs: ISanityHomepageParagraph[];
  education: ISanityEducation[];
  publications: ISanityPublication[];
  services: ISanityService[];
  socials: ISanitySocial[];
}

const Home = ({
  collaborators,
  initialSlides,
  beforeParagraphs,
  afterParagraphs,
  education,
  publications,
  services,
  socials,
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
      </TextWrapper>

      <FadeIn threshold={0.1}>
        <div className="flex flex-col my-16 md:mt-24 md:mb-18">
          <ToPortfolioButton />
          <Carousel slides={initialSlides} />
        </div>
      </FadeIn>

      <TextWrapper>
        <div className={afterParagraphs.length > 0 ? "mt-16 md:mt-24" : ""}>
          <FadeIn threshold={0.3}>
            <span className="">{"People I've worked with:"}</span>
          </FadeIn>
          <ul className="list-none flex flex-col gap-3 pt-3 ml-3 md:ml-6 ">
            {collaborators.map((collab, i) => (
              <FadeIn key={collab._id} threshold={0.3}>
                <Collaborator collab={collab} />
              </FadeIn>
            ))}
          </ul>
        </div>
      </TextWrapper>

      <TextWrapper>
        <CVContact socials={socials} />
      </TextWrapper>

      <TextWrapper>
        <FadeIn threshold={0.3}>
          <Footer className="pt-12 pb-32 text-hp-sm text-footer-text leading-loose" />
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
  return (
    <li>
      <Link
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
    <div className="flex flex-row gap-4 px-4 text-footer-text text-hp-sm w-fit font-bold">
      <Link href="/blog">
        <div>
          <span className="hover:text-esrs-hover">{"Blog"}</span>
        </div>
      </Link>
      <Link href="/work">
        <div>
          <span className="hover:text-esrs-hover">{"Portfolio"}</span>
        </div>
      </Link>
      <Link href="/contact">
        <div>
          <span className="hover:text-esrs-hover">{"Contact"}</span>
        </div>
      </Link>
    </div>
  );
};
