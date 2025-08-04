"use client";

import { Card, CardBody, CardHeader, Input } from "@heroui/react";
import React from "react";

const LoginForm = () => {
  return (
    <Card
      className="min-w-[30vw]"
      shadow="none"
      classNames={{ base: "outline-1 outline-neutral-400" }}
    >
      <CardHeader className="mt-2 justify-center">
        <h1 className="text-2xl font-medium text-center">Welcome Back</h1>
      </CardHeader>
      <CardBody className="px-4">
        <Input
          label="Email"
          variant="bordered"
          classNames={{
            input: "focus:outline-none text-md",
            label: "mb-1",
          }}
        />
      </CardBody>
    </Card>
  );
};

export default LoginForm;
