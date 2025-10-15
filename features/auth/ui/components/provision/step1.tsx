"use client";

import { Button, Input } from "@heroui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

const Step1ProvisionRegister = ({ NextStep }: { NextStep: () => void }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full">
      <Input
        {...register("fullName")}
        className="w-full"
        label="Full Name"
        type="email"
        variant="bordered"
        isInvalid={errors.fullname ? true : false}
        errorMessage={errors.fullname?.message as string}
        classNames={{
          input: "text-md font-light pt-4",
          inputWrapper: "flex gap-10",
        }}
      />
      <Button
        type="button"
        className="mt-1.5 w-full"
        color="primary"
        onPress={NextStep}
      >
        Continue
      </Button>
    </div>
  );
};

export default Step1ProvisionRegister;
