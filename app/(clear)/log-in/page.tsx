import LoginCard from "@/widgets/login/loginCard/Index";
import React from "react";

const page = () => {
  return (
    <>
      {/* Fixed background overlay */}
      <div className="relative w-screen h-screen bg-red-500 bg-[url('/assets/pages/login/a78h12j89a01n.jpg')] bg-cover bg-center">
        {/* Fixed background overlay */}
        <div className="fixed z-0 w-screen h-screen backdrop-blur-xl bg-black bg-opacity-70" />
        {/* Login card centered on the screen */}
        <div className="fixed z-10 w-screen h-screen flex justify-center items-center">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default page;
