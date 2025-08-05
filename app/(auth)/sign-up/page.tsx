import { buildMeta } from "@/shared/config/meta";
import SignupCard from "@/widgets/authentication/signup/SignupCard";
import React from "react";

export const generateMetadata = () => {
  return buildMeta({
    title: "Sign in",
  });
};

const page = () => {
  return (
    <div className="fixed z-10 w-screen h-screen flex justify-center items-center -mt-12">
      <SignupCard />
    </div>
  );
};

export default page;
