"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import getOauthProviderList from "../lib/getOauthProviderList";

const OAuthProviders = () => {
  const [oauthProvidersList, setOauthProvidersList] = useState<
    oauthProviders[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const res = (await getOauthProviderList()) as oauthProviders[];
        setOauthProvidersList(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      {oauthProvidersList.length > 0 ? (
        oauthProvidersList.map((provider, index) => {
          return (
            <Button
              key={index}
              className="w-full hover:bg-neutral-800"
              variant="bordered"
              startContent={<Icon icon={provider.icon} />}
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
