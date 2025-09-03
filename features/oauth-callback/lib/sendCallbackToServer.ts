"use server";
import { api } from "@/shared/api/connector";

export const SendCallbackToServer = async (data: string, provider: string) => {
  const backendHandlerUrl = `auth/${provider}/callback/`;
  const frontendHandlerUrl = `${process.env
    .APP_DOMAIN!}/auth/callback/${provider}`;

  try {
    const response = await api.get(
      `${backendHandlerUrl}${data}&callbackURI=${frontendHandlerUrl}`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
