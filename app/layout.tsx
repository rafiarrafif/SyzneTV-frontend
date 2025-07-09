import "./globals.css";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="dark">
      <body>
        <GeistFontProvider>{children}</GeistFontProvider>
      </body>
    </html>
  );
};

export default RootLayout;
