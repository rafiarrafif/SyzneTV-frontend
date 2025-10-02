"use client";

import React from "react";
import EmailInput from "./EmailInput";
import { Button, Divider, Link } from "@heroui/react";
import { routes } from "@/shared/config/routes";
import OAuthProviders from "./OAuthProviders";
import DebugPage from "@/app/debug/DebugPage";

type Props = {
  changeCurrentPage: React.Dispatch<React.SetStateAction<React.JSX.Element>>;
};

const Signup = ({ changeCurrentPage }: Props) => {
  return (
    <div className="pt-12 max-w-[480px] mx-auto">
      <div className="text-3xl text-center">Create an account</div>

      {/* Email form */}
      <div className="mt-6 px-3">
        <EmailInput />
        <Button
          onPress={() => changeCurrentPage(<DebugPage />)}
          className="mt-2 w-full"
          color="primary"
        >
          For debug only
        </Button>
      </div>

      {/* Sign up link */}
      <p className="text-center text-neutral-300 text-sm font-light mt-5">
        Already have an account?{" "}
        <Link className="text-sm font-medium" href={routes.login}>
          Log in
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

export default Signup;
