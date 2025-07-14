"use client";

import { Card, Divider, Link } from "@heroui/react";
import React from "react";
import EmailForm from "./EmailForm";
import ContinueWithProviders from "./ContinueWithProviders";

const LoginCard = () => {
  return (
    <Card className="px-6 sm:px-8 py-12 sm:py-8 h-screen sm:h-auto w-screen sm:w-auto">
      <h1 className="text-3xl font-light text-center">Welcome Back</h1>

      {/* Email form */}
      <EmailForm />

      {/* Sign up link */}
      <p className="text-center text-neutral-300 text-sm font-light mt-5">
        Don't have an account?{" "}
        <Link className="text-sm font-medium" href="/sign-up">
          Sign Up
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

export default LoginCard;
