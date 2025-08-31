"use client";

import { CircularProgress } from "@heroui/react";
import React, { useEffect, useRef } from "react";
import { SendCallbackToServer } from "../lib/sendCallbackToServer";

const LoadingProcess = () => {
  const calledRef = useRef(false);
  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    (async () => {
      try {
        await SendCallbackToServer(window.location.search);
        window.close();
      } catch (error) {
        console.log(error);
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
      </div>
    </div>
  );
};

export default LoadingProcess;
