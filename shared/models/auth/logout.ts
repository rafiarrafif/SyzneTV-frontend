"use server";

import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  const res = (await backendFetch("auth/logout", {
    method: "POST",
  })) as BackendResponse;

  if (res.success) {
    redirect("/auth/logout");
  } else {
    return {
      success: false,
      message: "Logout failed",
    };
  }
};
