import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Esteban Serrano",
  description: "Portfolio",
};

const akzidenzRoman = localFont({
  src: '../public/fonts/Akzidenz-grotesk-roman.ttf',
  variable: '--font-akz-roman',
})

const akzidenzBold = localFont({
  src: '../public/fonts/Akzidenz-grotesk-bold.ttf',
  variable: '--font-akz-bold',
})

const canonicalUrl = process.env.NEXT_PUBLIC_CANONICAL_URL

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{'Esteban Serrano'}</title>
        <meta name="description" content={"Design Engineering"} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content={"website"} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={"Esteban Serrano"} />
        <meta property="og:description" content={"Design Engineering"} />
        <meta property="og:locale" content={"en"} />
        <meta property="og:image" content={`${canonicalUrl}/esrs-og.jpg`} />
      </Head>

      <body
        className={`
        ${akzidenzRoman.variable}
        ${akzidenzBold.variable}
        font-sans antialiased 
        selection:bg-gray-200 selection:text-blue-500 text-[13px] sm:text-[15px]
        text-[#686868]
        `}
      >
        {children}
      </body>
    </html>
  );
}
