"use server";

import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";

export const logout = async () => {
  const res = (await backendFetch("auth/logout", {
    method: "POST",
  })) as BackendResponse;

  if (res.success) {
    return {
      success: true,
      message: "Logout successful",
    };
  } else {
    return {
      success: false,
      message: "Logout failed",
    };
  }
};
