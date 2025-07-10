import NavbarUI from "@/shared/ui/navbar";
import React from "react";

const mainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <NavbarUI />
      <main>{children}</main>
    </div>
  );
};

export default mainLayout;
