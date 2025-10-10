import React from "react";

const SecurityCheckup = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[60vh]">
        <h1 className="mt-[20vh] text-2xl text-center">Please wait...</h1>
        <p className="mt-4 text-sm text-center text-neutral-400">
          We want to ensure a secure authentication environment before
          proceeding for your safety.
        </p>
      </div>
    </div>
  );
};

export default SecurityCheckup;
