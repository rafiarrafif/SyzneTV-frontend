"use client";

import { Card, Divider, Link } from "@heroui/react";
import { routes } from "@/shared/config/routes";
import React from "react";
import ContinueWithProviders from "../ContinueWithProviders";
import EmailForm from "@/features/signup/ui/EmailForm";

const SignupCard = () => {
  return (
    <Card className="px-6 sm:px-8 py-12 sm:py-8 h-screen sm:h-auto w-screen sm:w-[460px]">
      <h1 className="text-3xl font-light text-center">Create an account</h1>

      {/* Email form */}
      <EmailForm />

      {/* Log in link */}
      <p className="text-center text-neutral-300 text-sm font-light mt-5">
        Already have an account?{" "}
        <Link className="text-sm font-medium" href={routes.login}>
          Log in
        </Link>
      </p>

      {/* Divider between email form and third-party login options */}
      <div className="flex w-full items-center mt-4">
        <Divider className="flex-1" />
        <span className="px-2 text-neutral-500 text-sm">or</span>
        <Divider className="flex-1" />
      </div>

      {/* Buttons for third-party login options */}
      <ContinueWithProviders />
    </Card>
  );
};

export default SignupCard;
