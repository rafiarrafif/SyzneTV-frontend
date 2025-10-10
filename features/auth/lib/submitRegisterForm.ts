"use server";

import { apiErrorHandler } from "@/shared/lib/ky/errorHandler";
import { RegisterInputs } from "../ui/components/ProvisionInput";
import { ServerRequestCallback } from "@/shared/types/ServerRequestCallback";
import { generateRandomString } from "@/shared/helper/generateRandomString";

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
    console.log({
      ...data,
      username:
        data.fullname
          .trim()
          .split(" ")[0]
          .toLowerCase()
          .substring(0, 5) +
        "_" +
        generateRandomString(10),
    });
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
