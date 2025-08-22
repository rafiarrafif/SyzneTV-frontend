"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import getGoogleAuthUrl from "../lib/getGoogleAuthUrl";

const OAuthProviders = () => {
  const [UrlOauth, setUrlOauth] = useState("please wait...");

  useEffect(() => {
    (async () => {
      try {
        const res = await getGoogleAuthUrl(); // panggil server function
        setUrlOauth(JSON.stringify(res));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // set to true if there are other providers coming soon
  const comingSoonProviders: boolean = true;

  // Provider for third-party auth
  const oAuthProviders = [
    {
      name: "Google",
      icon: "logos:google-icon",
    },
    {
      name: "Discord",
      icon: "logos:discord-icon",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      {oAuthProviders.map((provider, index) => {
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
      })}

      <h1>{UrlOauth}</h1>

      {comingSoonProviders && (
        <Button className="w-full" variant="ghost" isDisabled>
          Other login options will come soon
        </Button>
      )}
    </div>
  );
};

export default OAuthProviders;
