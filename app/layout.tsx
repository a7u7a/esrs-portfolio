import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Esteban Serrano",
  description: "Portfolio",
};

const mediumFont = localFont({
  src: [
    {
      path: '../public/fonts/MediumLLWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MediumLLWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-medium',
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
        ${mediumFont.variable}
        font-sans 
        selection:bg-gray-200 selection:text-esrs-blue text-[14px] sm:text-[16px]
        text-esrs-dark-gray
        `}
      >
        {children}
      </body>
    </html>
  );
}
