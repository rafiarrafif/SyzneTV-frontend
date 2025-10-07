"use client";

import React, { useState } from "react";
import { addToast, Button, Form, Input } from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { submitRegisterForm } from "../../models/submitRegisterForm";

type Props = {
  fullname: string;
};

export type RegisterInputs = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ProvisionInput = ({ fullname }: Props) => {
  const { register, handleSubmit, setValue } = useForm<RegisterInputs>();
  setValue("fullname", fullname);

  const [submitStatus, setSubmitStatus] = useState(false);
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setSubmitStatus(true);
    console.log("Mensubmit");
    const returnData = await submitRegisterForm(data);
    console.log(returnData);
    addToast({
      color: "danger",
      title: "😬 Oops, something went wrong!",
      description: returnData.text.message,
    });
    setSubmitStatus(false);
  };

  return (
    <div className="mt-6 px-3">
      <Form className="flex flex-col gap-1.5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          className="w-full "
          label="Email"
          type="email"
          variant="bordered"
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
        <Input
          {...register("password")}
          className="w-full "
          label="Password"
          type="password"
          variant="bordered"
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
        <Input
          {...register("confirmPassword")}
          className="w-full "
          label="Confirm Password"
          type="password"
          variant="bordered"
          classNames={{
            input: "text-md font-light pt-4",
            inputWrapper: "flex gap-10",
          }}
        />
        <Button
          type="submit"
          className="mt-1.5 w-full"
          color="primary"
          isLoading={submitStatus}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default ProvisionInput;
