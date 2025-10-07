"use server";

import { HTTPError } from "ky";

export type CallApiErrorHandler = {
  success?: boolean;
  status?: number;
  text?: { message?: string };
};

export const apiErrorHandler = async (
  error: unknown,
  safeFail?: CallApiErrorHandler
) => {
  if (error instanceof HTTPError) {
    return {
      success: false,
      status: error.response.status,
      text: await error.response.json(),
    };
  }

  if (safeFail) {
    return {
      success: safeFail.success || false,
      status: safeFail.status || 500,
      text: {
        message: safeFail.text?.message || "An unexpected error occurred",
      },
    };
  } else {
    throw error;
  }
};
