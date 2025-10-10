"use client";

import { redirect } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import SecurityCheckup from "@/shared/auth/ui/SecurityCheckup";
import SecurityCheckupFailed from "@/shared/auth/ui/SecurityCheckupFailed";
import Signup from "../ui/cards/Signup";

const SignupPage = () => {
  // State to set the current page component
  const [componentFlow, setComponentFlow] = useState<JSX.Element>(
    <SecurityCheckup />
  );

  /**
   * Create a lit component that will be used in popp, consisting of 3 component flows:
   * 1. If it passes, the login component will appear and the user will perform authentication.
   * 2. If it fails, stop the authentication process and display the warning component, then return the user to the homepage.
   */
  const componentFlowList = {
    securityCheckupFailed: <SecurityCheckupFailed />,
    SecurityCheckupSuccessed: <Signup changeCurrentPage={setComponentFlow} />,
  };

  useEffect(() => {
    /**
     * Check if the window has an opener (i.e., it was opened by another window)
     * If it does, the security checkup has passed.
     * If it doesn't, the security checkup has failed and user will be redirected to the homepage.
     */
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
      {/* show the current component flow */}
      <main>{componentFlow}</main>
    </>
  );
};

export default SignupPage;
