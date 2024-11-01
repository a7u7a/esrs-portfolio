import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  metadataBase: new URL('https://esrs.co'),
  title: "Esteban Serrano",
  description: "Portfolio",
  keywords: ["design engineering", "portfolio", "creative development", "front-end developer", "full-stack developer", "interaction design", "data visualization", "creative coder", "hci"],
  creator: "Esteban Serrano",
  openGraph: {
    images: '/esrs-og.jpg',
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${mediumFont.variable}
        font-sans 
        selection:bg-gray-200 selection:text-esrs-blue 
        text-[2rem] md:text-[3.5rem] 
        leading-[1.25] 
        text-[#303030]
        bg-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
