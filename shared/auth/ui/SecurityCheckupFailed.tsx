import React from "react";

const SecurityCheckupFailed = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[60vh]">
        <h1 className="mt-[20vh] text-2xl text-center text-red-400">
          Your browser is not secure
        </h1>
        <p className="mt-4 text-sm text-center text-neutral-400">
          Sorry, we had to stop the authentication process and return you to the
          home page because your browser environment is not secure.
        </p>
      </div>
    </div>
  );
};

export default SecurityCheckupFailed;
