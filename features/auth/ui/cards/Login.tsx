"use client";

import React from "react";
import { Divider, Link } from "@heroui/react";
import { routes } from "@/shared/config/routes";
import EmailInput from "../components/EmailInput";
import OAuthProviders from "../components/OAuthProviders";

const Login = () => {
  return (
    <div className="pt-12 max-w-[480px] mx-auto">
      <div className="text-3xl text-center">Welcome back</div>

      {/* Email form */}
      <div className="mt-6 px-3">
        <EmailInput />
      </div>

      {/* Sign up link */}
      <p className="text-center text-neutral-300 text-sm font-light mt-5">
        Don't have an account?{" "}
        <Link className="text-sm font-medium" href={routes.signup}>
          Sign Up
        </Link>
      </p>

      {/* Divider between email form and third-party login options */}
      <div className="flex w-full items-center mt-6 px-10">
        <Divider className="flex-1" />
        <span className="px-2 text-neutral-500 text-sm">or</span>
        <Divider className="flex-1" />
      </div>

      {/* Buttons for third-party login options */}
      <div className="mt-6 px-4">
        <OAuthProviders />
      </div>
    </div>
  );
};

export default Login;
