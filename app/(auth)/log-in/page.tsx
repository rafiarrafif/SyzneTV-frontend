import { buildMeta } from "@/shared/config/meta";
import LoginCard from "@/widgets/authentication/login/LoginCard";
import React from "react";

export const generateMetadata = () => {
  return buildMeta({
    title: "Log in",
  });
};

const page = () => {
  return (
    <div className="fixed z-10 w-screen h-screen flex justify-center items-center -mt-12">
      <LoginCard />
    </div>
  );
};

export default page;
