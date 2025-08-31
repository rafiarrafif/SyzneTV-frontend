"use server";
import { api } from "@/shared/api/connector";

export const SendCallbackToServer = async (data: string, provider: string) => {
  try {
    const response = await api.get(`auth/${provider}/callback${data}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
