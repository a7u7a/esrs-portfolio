import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Esteban Serrano",
  description: "Portfolio",
};

const antiqueRegular = localFont({
  
  src: '../public/fonts/Antique-Legacy-Light-Trial.otf',
  variable: '--font-antique-regular',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={interFont.className} >{children}</body> */}
      <body className={`${antiqueRegular.variable} font-sans antialiased selection:bg-gray-200 selection:text-blue-500`} >{children}</body>
    </html>
  );
}
