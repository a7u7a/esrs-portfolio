"use client";
import React, { useState } from "react";
import { useRotationSpeed } from "@/lib/hooks";
import { useScrollProgress } from "@/lib/hooks";
import Link from "next/link";
import SpinningLogo from "@/components/spinning-logo";
import FreeLoopingCarousel from "@/components/homepage/free-looping-carousel";
import FadeIn from "@/components/homepage/fade-in";
import { ISanityCollaborator, ISanitySlide } from "@/lib/types";
import Footer from "../footer";

interface HomePageMainProps {
  collaborators: ISanityCollaborator[];
  initialSlides: ISanitySlide[];
}

const HomePageMain = ({ collaborators, initialSlides }: HomePageMainProps) => {
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

      <TextWrapper>
        <div className="">
          <FadeIn threshold={0.3}>
            <span>
              {
                "Esteban Serrano is a design technologist and frontend engineer based in Berlin."
              }
            </span>
          </FadeIn>
        </div>

        <div className="mt-16 md:mt-24">
          <FadeIn threshold={0.3}>
            <span className="">
              {
                "Developing solutions for brands, studios and research since 2014."
              }
            </span>
          </FadeIn>
        </div>
      </TextWrapper>

      <FadeIn threshold={0.1}>
        <div className="flex flex-col my-16 md:mt-24 md:mb-18">
          <ToPortfolioButton />
          <FreeLoopingCarousel slides={initialSlides} />
        </div>
      </FadeIn>

      <TextWrapper>
        <FadeIn threshold={0.3}>
          <div className="text-balance">
            <span>
              {"Specialized in web development and interaction design."}
            </span>
          </div>
        </FadeIn>

        <div className="mt-16 md:mt-24">
          <FadeIn threshold={0.3}>
            <div className="text-balance">
              <span>{"Proficient in Typescript, React and Python."}</span>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 md:mt-24">
          <FadeIn threshold={0.3}>
            <span className="">{"People he's worked with:"}</span>
          </FadeIn>
          <ul className="list-none flex flex-col gap-3 pt-3 ml-3 md:ml-6 ">
            {collaborators.map((collab, i) => (
              <FadeIn key={i} threshold={0.3}>
                <Collaborator collab={collab} />
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className="pt-20">
          <ul className="list-none flex flex-wrap gap-3 md:gap-6">
            {/* {socials.map((social, i) => (
              <FadeIn key={i} threshold={0.3}>
                <li>
                  <a className='transition-colors ease-in-out duration-100 hover:text-hover-socials' href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </li>
              </FadeIn>
            ))} */}
            <FadeIn threshold={0.3}>
              <li>
                {/* <a className='transition-colors ease-in-out duration-100 hover:text-hover-socials' href="mailto:esteban@esrs.co">
                  {"esteban@esrs.co"}
                </a> */}
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

export default HomePageMain;

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
