import "./globals.css";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import HeroUIWrapper from "@/providers/HeroUIWrapper";
import NextTopLoader from "nextjs-toploader";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="dark">
      <body>
        <NextTopLoader easing="ease" showSpinner={false} />
        <GeistFontProvider>
          <HeroUIWrapper>{children}</HeroUIWrapper>
        </GeistFontProvider>
      </body>
    </html>
  );
};

export default RootLayout;
