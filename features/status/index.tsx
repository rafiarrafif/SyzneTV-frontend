"use client";

import Image from "next/image";
import UnderContruction from "@/shared/assets/under-construction.svg";

const StatusIndex = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 pt-12 md:pt-22">
        <Image
          src={UnderContruction}
          alt="Under Construction"
          draggable={false}
          width={240}
        />
        <div className="mt-6 md:mt-0 md:ml-6 lg:ml-12 max-w-md">
          <h1 className="text-xl font-semibold">
            Service is temporarily unavailable
          </h1>
          <p className="text-sm text-neutral-300 mt-2">
            We're currently experiencing an issue with this service and our team
            is working to restore it as quickly as possible. You can still
            browse other features while we fix the problem. Please check back in
            a few moments. We appreciate your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusIndex;
