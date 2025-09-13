"use server";

import { HTTPError } from "ky";

export const apiErrorHandler = async (
  error: unknown,
  safeFail: boolean = false
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
      success: false,
      status: 500,
      text: { message: "An unexpected error occurred" },
    };
  } else {
    throw error;
  }
};
