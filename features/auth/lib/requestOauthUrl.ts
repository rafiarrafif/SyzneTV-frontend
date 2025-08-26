"use server";

import { api } from "@/shared/api/connector";
import { redirect } from "next/navigation";
import { ResponseRequestOauthUrl } from "../types/responseRequestOauthUrl";

const requestOauthUrl = async (providerData: {
  name: string;
  endpoint: string;
}) => {
  // Check if requestEndpoint is provided, if not throw an error
  if (!providerData.endpoint)
    throw new Error("oAuth endpoint request not found");

  // Define a variable to hold the OAuth data
  let oauthData: Promise<ResponseRequestOauthUrl>;

  // Fetch OAuth data from the API
  try {
    const response = await api.get(providerData.endpoint, {
      searchParams: {
        callback: `${
          process.env.APP_DOMAIN
        }/auth/callback/${providerData.name.toLocaleLowerCase()}`,
      },
    });
    oauthData = response.json<ResponseRequestOauthUrl>();
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }

  // Redirect to the OAuth provider's authorization page
  redirect((await oauthData).data);
};

export default requestOauthUrl;
