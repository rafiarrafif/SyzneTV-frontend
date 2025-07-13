import LoginCard from "@/widgets/login/card";
import React from "react";

const page = () => {
  return (
    <div className="relative w-screen h-screen bg-red-500 bg-[url('/assets/pages/login/a78h12j89a01n.jpg')] bg-cover bg-center">
      <div className="fixed z-0 w-screen h-screen backdrop-blur-xl bg-black bg-opacity-70" />
      <div className="fixed z-10 w-screen h-screen flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
};

export default page;
