"use server";
import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";

export type GetALlThirdPartyAuthCallback = BackendResponse<
  {
    name: string;
    icon: string;
    req_endpoint: string;
  }[]
>;

export const getAllThirdPartyAuth = async () => {
  return (await backendFetch("auth/providers")) as GetALlThirdPartyAuthCallback;
};
