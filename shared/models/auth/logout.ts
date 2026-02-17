"use server";

import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";
import { cookies } from "next/headers";

export const logout = async () => {
  const res = (await backendFetch("auth/logout", {
    method: "POST",
  })) as BackendResponse;

  if (res.success) {
    (await cookies()).delete("auth_token");
    return {
      success: true,
      message: "Logged out successfully",
    };
  } else {
    return {
      success: false,
      message: "Logout failed",
    };
  }
};
