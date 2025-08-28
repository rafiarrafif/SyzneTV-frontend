"use client";

import { CircularProgress } from "@heroui/react";
import React, { useEffect } from "react";
import { ParamProps } from "../types/ParamProps";
import { SendCallbackToServer } from "../lib/sendCallbackToServer";

const LoadingProcess = ({ callbackData }: { callbackData: ParamProps }) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await SendCallbackToServer(callbackData);
        console.log(
          `Callback data sent to server successfully: ${JSON.stringify(
            response
          )}`
        );
      } catch (error) {
        console.error("Error during loading process:", error);
      }
    })();
  }, []);
  return (
    <div className="w-full flex flex-col items-center text-center mt-[26vh]">
      <CircularProgress aria-label="Loading..." size="lg" />
      <div className="mt-4">
        <h1 className="text-lg text-neutral-200">Please wait...</h1>
        <p className="text-sm text-neutral-400">
          Your request is being processed
        </p>
        <p className="text-sm text-neutral-400">
          {JSON.stringify(callbackData)}
        </p>
      </div>
    </div>
  );
};

export default LoadingProcess;
