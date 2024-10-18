import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
