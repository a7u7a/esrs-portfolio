import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref?: string;
    _id?: string;
    url?: string;
  };
  alt?: string;
  caption?: string;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-balance [&:not(:first-child)]:pt-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-semibold pt-8 pb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold pt-6 pb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-esrs-dark-gray pl-4 italic text-esrs-dark-gray my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 pt-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 pt-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-esrs-gray px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="underline hover:text-esrs-hover transition-colors"
          {...(isExternal && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).quality(90).url()}
            alt={value.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-sm text-esrs-dark-gray mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface BlogPortableTextProps {
  value: PortableTextBlock[];
}

export default function BlogPortableText({ value }: BlogPortableTextProps) {
  return <PortableText value={value} components={components} />;
}
