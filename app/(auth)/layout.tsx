import React from "react";

const clearLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative w-screen h-screen bg-red-500 bg-[url('/assets/pages/login/a78h12j89a01n.jpg')] bg-cover bg-center">
      <div className="fixed z-0 w-screen h-screen backdrop-blur-xl bg-black/60" />
      {children}
    </div>
  );
};

export default clearLayout;
