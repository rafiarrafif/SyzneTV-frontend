"use client";

import React from "react";
import ProvisionInput from "../components/ProvisionInput";

type Props = {
  fullName: string;
};

const Provision = ({ fullName }: Props) => {
  return (
    <div className="pt-12 max-w-[480px] mx-auto">
      <div className="text-3xl text-center">Hey, {fullName.split(" ")[0]}</div>
      <p className="text-sm text-center font-light text-neutral-300 mt-2">
        Just a few more steps to join the fun!
      </p>
      <ProvisionInput />
    </div>
  );
};

export default Provision;
