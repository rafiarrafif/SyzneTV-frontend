"use client";

import { Button, Form, Input } from "@heroui/react";
import React from "react";

const EmailForm = () => {
  return (
    // Form component to handle email input
    <Form className="mt-12 sm:mt-8">
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
    </Form>
  );
};

export default EmailForm;
