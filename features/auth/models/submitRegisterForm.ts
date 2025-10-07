"use server";

import { apiErrorHandler } from "@/shared/lib/ky/errorHandler";
import { RegisterInputs } from "../ui/components/ProvisionInput";
import { ServerRequestCallback } from "@/shared/types/ServerRequestCallback";

export const submitRegisterForm = async (
  data: RegisterInputs
): Promise<ServerRequestCallback> => {
  if (data.password !== data.confirmPassword)
    return apiErrorHandler([], {
      success: false,
      status: 400,
      text: { message: "Password and Confirm Password do not match" },
    });

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      success: true,
      status: 200,
      text: { message: "Registration successful" },
    };
  } catch (error) {
    return apiErrorHandler(error);
  }
};
