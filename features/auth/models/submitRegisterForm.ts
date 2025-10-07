"use server";

import { RegisterInputs } from "../ui/components/ProvisionInput";

export const submitRegisterForm = async (data: RegisterInputs) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
};
