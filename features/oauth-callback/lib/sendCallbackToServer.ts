"use server";
import { api } from "@/shared/api/connector";

export const SendCallbackToServer = async (data: Record<string, any>) => {
  try {
    const response = await api.get("auth/google/callback", {
      searchParams: { ...data },
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error sending callback to server:", error);
    throw error;
  }
};
