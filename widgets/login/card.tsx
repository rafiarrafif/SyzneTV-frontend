"use client";

import React from "react";
import { Button, Card, Divider, input, Input } from "@heroui/react";

const LoginCard = () => {
  return (
    <Card className="px-8 py-12">
      <h1 className="text-3xl font-light text-center">Welcome Back</h1>
      <Input
        className="w-[420px] mt-8"
        label="Email"
        type="email"
        variant="bordered"
        classNames={{
          input: "text-md font-light pt-4",
          inputWrapper: "flex gap-10",
        }}
      />
      <Button className="mt-4" color="primary">
        Sign In
      </Button>
      <div className="flex w-full items-center mt-6">
        <Divider className="flex-1" />
        <span className="px-2 text-neutral-500 text-sm">or</span>
        <Divider className="flex-1" />
      </div>
    </Card>
  );
};

export default LoginCard;
