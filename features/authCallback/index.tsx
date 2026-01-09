"use client";
import { Spinner } from "@/shared/libs/shadcn/ui/spinner";
import { submitProviderCallback } from "@/shared/widgets/signin/actions/submitProviderCallback";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AuthCallbackIndex = () => {
  const { name } = useParams();
  const queries = useSearchParams().toString();
  const router = useRouter();
  const [textDescription, setTextDescription] = useState(
    "We are processing your authentication."
  );

  useEffect(() => {
    (async () => {
      const response = await submitProviderCallback(name as string, queries);
      if (response.success) {
        setTextDescription("Authentication successful! Redirecting...");
        router.push("/");
      } else {
        setTextDescription("Authentication failed. Please try again.");
      }
    })();
  }, []);

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
