"use client";

import { Button, Input } from "@heroui/react";
import React from "react";

const EmailInput = () => {
  return (
    <>
      <Input
        className="w-full "
        label="Email"
        type="email"
        variant="bordered"
        classNames={{
          input: "text-md font-light pt-4",
          inputWrapper: "flex gap-10",
        }}
      />
      <Button className="mt-2 w-full" color="primary">
        Continue
      </Button>
    </>
  );
};

export default EmailInput;
