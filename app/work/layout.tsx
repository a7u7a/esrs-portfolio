
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("work layout");
  return (
    <div className={`text-[14px] sm:text-[16px] leading-[1.4]`}>
      {children}
    </div>
  );
}
