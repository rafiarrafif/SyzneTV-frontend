"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "@/features/auth/ui/Login";
import SecurityCheckup from "@/features/auth/ui/SecurityCheckup";
import SecurityCheckupFailed from "@/features/auth/ui/SecurityCheckupFailed";

const LoginPage = () => {
  const componentFlowList = {
    securityCheckup: <SecurityCheckup />,
    securityCheckupFailed: <SecurityCheckupFailed />,
    SecurityCheckupSuccessed: <Login />,
  };

  const [componentFlow, setComponentFlow] = useState(
    componentFlowList.securityCheckup
  );

  useEffect(() => {
    if (window.opener) {
      setComponentFlow(componentFlowList.SecurityCheckupSuccessed);
    } else {
      setComponentFlow(componentFlowList.securityCheckupFailed);

      const timer = setTimeout(() => {
        redirect("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <main>{componentFlow}</main>
    </>
  );
};

export default LoginPage;
