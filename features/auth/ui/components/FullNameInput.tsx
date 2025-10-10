"use client";

import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import Provision from "../cards/Provision";

type Props = {
  changeCurrentPage: React.Dispatch<React.SetStateAction<React.JSX.Element>>;
};

const FullNameInput = ({ changeCurrentPage }: Props) => {
  const [fullName, setFullName] = useState("");

  return (
    <>
      <Input
        className="w-full "
        label="Full Name"
        type="name"
        variant="bordered"
        onChange={(e) => setFullName(e.target.value)}
        classNames={{
          input: "text-md font-light pt-4",
          inputWrapper: "flex gap-10",
        }}
      />
      <Button
        onPress={() => changeCurrentPage(<Provision fullName={fullName} />)}
        className="mt-2 w-full"
        color="primary"
      >
        Continue
      </Button>
    </>
  );
};

export default FullNameInput;
