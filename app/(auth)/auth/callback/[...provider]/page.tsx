import OauthCallbackHandler from "@/features/oauth-callback/pages/callbackHandler";
import React from "react";

interface PageProps {
  params: { provider: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = ({ params, searchParams }: PageProps) => {
  return <OauthCallbackHandler />;
};

export default page;
