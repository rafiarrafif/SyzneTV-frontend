import NavbarUI from "@/widgets/navbar/ui/Navbar";
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
