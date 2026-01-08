import Navbar from "@/shared/widgets/navbar/components/Navbar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="max-w-400 mx-auto relative">
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default layout;
