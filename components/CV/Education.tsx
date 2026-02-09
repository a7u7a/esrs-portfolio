import React from "react";
import { ISanityEducation } from "@/lib/types";

interface CVEducationProps {
  education: ISanityEducation[];
}

const CVEducation = ({ education }: CVEducationProps) => {
  return (
    <section id="education">
      <h2 className="font-bold">Education</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3 max-w-[600px]">
        {education.map((edu) => (
          <li key={edu._id}>{edu.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default CVEducation;
