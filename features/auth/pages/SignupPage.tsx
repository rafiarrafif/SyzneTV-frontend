"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import SecurityCheckup from "@/features/auth/ui/SecurityCheckup";
import SecurityCheckupFailed from "@/features/auth/ui/SecurityCheckupFailed";
import disableDevtool from "disable-devtool";
import Signup from "../ui/Signup";

const SignupPage = () => {
  /**
   * Create a lit component that will be used in popp, consisting of 3 component flows:
   * 1. When the user opens it, a browser environment check will be performed.
   * 2. If it passes, the login component will appear and the user will perform authentication.
   * 3. If it fails, stop the authentication process and display the warning component, then return the user to the homepage.
   */
  const componentFlowList = {
    securityCheckup: <SecurityCheckup />,
    securityCheckupFailed: <SecurityCheckupFailed />,
    SecurityCheckupSuccessed: <Signup />,
  };

  // State to set the current page component
  const [componentFlow, setComponentFlow] = useState(
    componentFlowList.securityCheckup
  );

  useEffect(() => {
    // Prevent opening devtools while in authentication page
    disableDevtool();

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
