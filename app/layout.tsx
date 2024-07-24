import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Esteban Serrano",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
