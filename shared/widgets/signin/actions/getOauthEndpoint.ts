"use server";
import { backendFetch, BackendResponse } from "@/shared/helper/backendFetch";

interface GetOauthEndpointParams {
  endpointUrl: string;
  providerName: string;
}

export const getOauthEndpoint = async ({
  endpointUrl,
  providerName,
}: GetOauthEndpointParams) => {
  const envKey = providerName.toUpperCase() + "_CALLBACK_URL";

  return (await backendFetch(
    `${endpointUrl}?callback=${process.env.APP_URL}${process.env[envKey]}`
  )) as BackendResponse<{
    endpointUrl: string;
  }>;
};
