import SignupCard from "@/widgets/authentication/signup/SignupCard";
import React from "react";

const page = () => {
  return (
    <div className="fixed z-10 w-screen h-screen flex justify-center items-center -mt-12">
      <SignupCard />
    </div>
  );
};

export default page;
