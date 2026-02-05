import React, { useState, Fragment } from "react";
import { ISanityProject, ISanityProjectField } from "@/lib/types";
import { ArrowElbowRightUp } from "@phosphor-icons/react";
import Link from "next/link";

const AccordionFields = ({ project }: { project: ISanityProject }) => {
  const fields = project.fields || [];
  return (
    <div className="w-1/2 flex flex-col justify-start">
      {fields.map((field, index) => (
        <Fragment key={field._key || index}>
          <div
            className={`${index === fields.length - 1 && field.title === "Visit" ? "h-full" : ""}`}
          />
          <div>
            {/* Different field variations */}
            {field.url && field.value ? (
              <div>
                <span className="font-bold pr-1.5">{field.title}</span>
                <Link
                  href={field.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover:underline hover:text-esrs-blue">
                    {field.value}
                  </span>
                </Link>
              </div>
            ) : null}
            {field.url && !field.value ? <LinkField field={field} /> : null}
            {!field.url && field.value ? (
              <div>
                <span className="font-bold pr-1.5">{field.title}</span>
                <span>{field.value}</span>
              </div>
            ) : null}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default AccordionFields;

function LinkField({ field }: { field: ISanityProjectField }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-fit">
      <Link
        className="max-w-min"
        href={field.url!}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-[2px]">
          <span className={`font-bold ${hovered ? "underline" : ""}`}>
            {field.title}
          </span>
          <div className="pt-[2.5px]">
            <ArrowElbowRightUp weight={"bold"} size={19} />
          </div>
        </div>
      </Link>
    </div>
  );
}
