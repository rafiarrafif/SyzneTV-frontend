"use client";
import { backendFetch, BackendResponse } from "@/shared/helper/backendFetch";

export const getOauthEndpoint = async (url: string) => {
  return (await backendFetch(url)) as BackendResponse<{ endpointUrl: string }>;
};
