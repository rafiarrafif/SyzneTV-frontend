"use client";

import React, { JSX, useState } from "react";
import Step1ProvisionRegister from "./step1";
import { Form } from "@heroui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/features/auth/models/registerForm.schema";
import Step2ProvisionRegister from "./step2";

export type RegisterInputs = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ProvisionRegister = () => {
  const formMethods = useForm<RegisterInputs>({
    resolver: zodResolver(registerFormSchema),
  });

  const { handleSubmit } = formMethods;

  const sendProvisionData: SubmitHandler<RegisterInputs> = (data) => {};

  const NextToStep2 = () => {
    setCurrentComponent(<Step2ProvisionRegister />);
  };

  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    <Step1ProvisionRegister NextStep={NextToStep2} />
  );

  return (
    <FormProvider {...formMethods}>
      <Form
        className="flex flex-col gap-1.5 "
        onSubmit={handleSubmit(sendProvisionData)}
      >
        {currentComponent}
      </Form>
    </FormProvider>
  );
};

export default ProvisionRegister;
