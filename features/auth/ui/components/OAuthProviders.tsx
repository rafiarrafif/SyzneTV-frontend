"use client";

import React, { useEffect, useState } from "react";
import { OauthProviders } from "../../types/oauthProvidersList";
import { ResponseRequestOauthUrl } from "../../types/responseRequestOauthUrl";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import getOauthProviderList from "../../lib/getOauthProviderList";
import requestOauthUrl from "../../lib/requestOauthUrl";

const OAuthProviders = () => {
  // Set initial state for OAuth providers list
  const [oauthProvidersList, setOauthProvidersList] = useState<
    OauthProviders[]
  >([]);

  /**
   * Fetch the list of OAuth providers from backend API
   * and update the state if OAuth providers list is available
   */
  useEffect(() => {
    (async () => {
      try {
        const res = (await getOauthProviderList()) as OauthProviders[];
        setOauthProvidersList(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const [loadingButton, setLoadingButton] = useState(false);

  /**
   * Start the authentication process using oAuth by sending the endpoint URL to the backend for processing.
   *
   * @param providerRequestEndpoint The request endpoint for the OAuth provider
   */
  const startOauthProcess = async (providerData: {
    name: string;
    endpoint: string;
  }) => {
    try {
      setLoadingButton(true);

      (await requestOauthUrl(providerData)) as ResponseRequestOauthUrl;
    } catch (err) {
      setLoadingButton(false);
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      {/* Render OAuth provider buttons */}
      {oauthProvidersList.length > 0 ? (
        oauthProvidersList.map((provider, index) => {
          return (
            <Button
              key={index}
              className="w-full hover:bg-neutral-800"
              variant="bordered"
              startContent={<Icon className="w-4 h-4" icon={provider.icon} />}
              onPress={() =>
                startOauthProcess({
                  name: provider.name,
                  endpoint: provider.req_endpoint,
                })
              }
              isLoading={loadingButton}
            >
              Continue with {provider.name}
            </Button>
          );
        })
      ) : (
        <Button className="w-full" variant="ghost" isDisabled>
          No login options available via third-party providers
        </Button>
      )}
    </div>
  );
};

export default OAuthProviders;
