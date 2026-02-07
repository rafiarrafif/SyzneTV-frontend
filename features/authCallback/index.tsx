"use client";
import { Spinner } from "@/shared/libs/shadcn/ui/spinner";
import { submitProviderCallback } from "@/features/authCallback/actions/submitProviderCallback";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AuthCallbackIndex = () => {
  const { name } = useParams();
  const queries = useSearchParams().toString();
  const [textDescription, setTextDescription] = useState(
    "We are processing your authentication.",
  );

  const finishOAuthFlow = (type: string) => {
    setTimeout(() => {
      if (!window.opener) window.location.href = "/";
      window.opener.postMessage({ type: type }, window.location.origin);
      window.close();
    }, 1000);
  };

  useEffect(() => {
    (async () => {
      const response = await submitProviderCallback(name as string, queries);
      if (response.success) {
        setTextDescription("Authentication successful! Redirecting...");
        finishOAuthFlow("oauth-success");
      } else {
        console.error("Error in authentication callback:", response);
        setTextDescription("Authentication failed. Please try again.");
        finishOAuthFlow("oauth-failed");
      }
    })();
  }, [name, queries]);

  return (
    <div className="w-full flex flex-col items-center gap-2 pt-8">
      <Spinner className="size-6" />
      <div className="text-center">
        <h1 className="text-neutral-200 text-base">Please wait...</h1>
        <p className="font-normal text-neutral-400 text-sm">
          {textDescription}
        </p>
      </div>
    </div>
  );
};

export default AuthCallbackIndex;
