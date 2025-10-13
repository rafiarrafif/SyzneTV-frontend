"use server";

import { apiErrorHandler } from "@/shared/lib/ky/errorHandler";
import { RegisterInputs } from "../ui/components/ProvisionInput";
import { ServerRequestCallback } from "@/shared/types/ServerRequestCallback";
import { generateRandomString } from "@/shared/helper/generateRandomString";
import { CallbackFromBackend } from "../types/callbackFromBackend";
import { api } from "@/shared/lib/ky/connector";
import { COOKIE_KEYS } from "@/shared/constants/cookie.key";
import { setCookie } from "@/shared/helper/cookies/set";

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
    const payload = {
      username:
        data.fullname
          .trim()
          .split(" ")[0]
          .toLowerCase()
          .substring(0, 5) +
        "_" +
        generateRandomString(10),
      name: data.fullname,
      email: data.email,
      password: data.password,
    };
    const callback = (await api
      .post("users", { json: payload })
      .json()) as CallbackFromBackend<string>;

    await setCookie(COOKIE_KEYS.AUTH, callback.data!);

    return {
      success: true,
      status: 200,
      text: { message: "Registration successful" },
      data: callback.data,
    };
  } catch (error) {
    return apiErrorHandler(error);
  }
};
