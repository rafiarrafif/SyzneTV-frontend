import React, { JSX, useState } from "react";
import Step1ProvisionRegister from "./step1";

export type RegisterInputs = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ProvisionRegister = () => {
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    <Step1ProvisionRegister />
  );
  return <div>ProvisionRegister</div>;
};

export default ProvisionRegister;
