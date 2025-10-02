"use client";

import { Button, Input } from "@heroui/react";
import React, { useState } from "react";

const ProvisionInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="mt-6 px-3">
      <div className="flex flex-col gap-1.5">
        <Input
          className="w-full "
          label="Email"
          type="email"
          variant="bordered"
          onChange={(e) => setEmail(e.target.value)}
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
        <Input
          className="w-full "
          label="Password"
          type="password"
          variant="bordered"
          onChange={(e) => setPassword(e.target.value)}
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
        <Input
          className="w-full "
          label="Confirm Password"
          type="password"
          variant="bordered"
          onChange={(e) => setConfirmPassword(e.target.value)}
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
      </div>
      <Button className="mt-3 w-full" color="primary">
        Continue
      </Button>
    </div>
  );
};

export default ProvisionInput;
