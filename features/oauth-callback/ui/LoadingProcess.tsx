"use client";

import React from "react";
import { addToast, Button, CircularProgress, Link } from "@heroui/react";
import { SendCallbackToServer } from "../lib/sendCallbackToServer";
import { useParams } from "next/navigation";
import { useRunOnce } from "@/shared/hooks/useRunOnce";
import { routes } from "@/shared/config/routes";

const LoadingProcess = () => {
  // Access the URL parameters
  const params = useParams();

  // Forward the callback response to the backend server
  useRunOnce("forwardCallbackResponseToBackend", async () => {
    try {
      const response = await SendCallbackToServer(
        window.location.search,
        params.provider as string
      );

      if (response.success) {
        window.close();
      } else {
        addToast({
          title: "😬 Oops, there's a problem!",
          description: response.text.message,
          color: "danger",
          timeout: 0,
          endContent: (
            <Button
              size="sm"
              variant="flat"
              onPress={() => (window.location.href = routes.login)}
            >
              Try again
            </Button>
          ),
        });
      }
    } catch (error) {
      console.log(error);
      addToast({
        title: "😵‍💫 Oops, lost connection!",
        description: "Check your internet and try again",
        color: "danger",
        timeout: 0,
        endContent: (
          <Button
            size="sm"
            variant="flat"
            onPress={() => (window.location.href = routes.login)}
          >
            Reload
          </Button>
        ),
      });
    }
  });
  return (
    <div className="w-full flex flex-col items-center text-center mt-[26vh]">
      <CircularProgress aria-label="Loading..." size="lg" />
      <div className="mt-4">
        <h1 className="text-lg text-neutral-200">Please wait...</h1>
        <p className="text-sm text-neutral-400">
          Your request is being processed
        </p>
      </div>
    </div>
  );
};

export default LoadingProcess;
