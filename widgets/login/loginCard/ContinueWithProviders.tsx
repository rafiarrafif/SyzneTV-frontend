import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const ContinueWithProviders = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <Button
        className="w-full hover:bg-neutral-800"
        variant="bordered"
        startContent={<Icon icon="logos:google-icon" />}
      >
        Continue with Google
      </Button>
      <Button
        className="w-full hover:bg-neutral-800"
        variant="bordered"
        startContent={<Icon icon="logos:discord-icon" />}
      >
        Continue with Discord
      </Button>
      <Button className="w-full" variant="ghost" isDisabled>
        Other login options will come soon
      </Button>
    </div>
  );
};

export default ContinueWithProviders;
