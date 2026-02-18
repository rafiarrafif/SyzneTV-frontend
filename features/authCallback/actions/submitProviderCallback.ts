"use server";

import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";
import { cookies } from "next/headers";

export const submitProviderCallback = async (
  providerName: string,
  queries?: unknown,
): Promise<
  BackendResponse<{
    authToken: string;
  }>
> => {
  try {
    const envKey = providerName.toUpperCase() + "_CALLBACK_URL";

    const authClientCallbackUrl = (await backendFetch(
      "auth/providers/" + providerName + "/callback",
    )) as BackendResponse<{
      callback_url: string;
    }>;

    if (!authClientCallbackUrl.success)
      throw new Error("Failed to get auth client callback URL");

    const responseProvision = (await backendFetch(
      `${authClientCallbackUrl.data?.callback_url}?callbackURI=${
        process.env.APP_URL
      }${process.env[envKey]}&${queries}`,
    )) as BackendResponse<{
      authToken: string;
    }>;

    if (!responseProvision.success)
      throw new Error("Failed to submit provider callback");

    (await cookies()).set({
      name: "auth_token",
      value: responseProvision.data?.authToken || "",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: Number(process.env.SESSION_EXPIRE),
    });

    return responseProvision;
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Error submitting provider callback",
      error: error,
    };
  }
};
