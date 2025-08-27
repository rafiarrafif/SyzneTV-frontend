import OauthCallbackHandler from "@/features/oauth-callback/pages/callbackHandler";
import React from "react";
import { ParamProps } from "@/features/oauth-callback/types/ParamProps";

const page = ({ params, searchParams }: ParamProps) => {
  return <OauthCallbackHandler callbackData={{ params, searchParams }} />;
};

export default page;
