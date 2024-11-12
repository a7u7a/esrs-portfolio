import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Work"
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`text-[14px] sm:text-[16px] leading-[1.4]`}>
      {children}
    </div>
  );
}
