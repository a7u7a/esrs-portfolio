import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

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

// const antiqueRegular = localFont({
//   src: '../public/fonts/Antique-Legacy-Light-Trial.otf',
//   variable: '--font-antique-regular',
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={interFont.className} >{children}</body> */}
      <body className={`${akzidenzRoman.variable} ${akzidenzBold.variable} font-sans antialiased selection:bg-gray-200 selection:text-blue-500 text-[15px] text-[#686868]`} >{children}</body>
    </html>
  );
}
