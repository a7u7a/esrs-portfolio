import React from "react";
import { ISanitySocial } from "@/lib/types";

interface CVContactProps {
  socials: ISanitySocial[];
}

const CVContact = ({ socials }: CVContactProps) => {
  return (
    <section id="contact">
      <div className="pt-6 sm:pt-12 text-sm sm:text-base leading-loose">
        <ul className="list-none flex flex-col max-w-[600px]">
          <li key={1}>
            <a
              className="hover:underline hover:text-esrs-blue"
              href="mailto:esteban@esrs.co"
            >
              esteban@esrs.co
            </a>
          </li>
        </ul>
        <ul className="list-none flex flex-wrap gap-3 pt-3">
          {socials.map((social) => (
            <li key={social._id}>
              <a
                className="underline hover:text-esrs-blue"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CVContact;
