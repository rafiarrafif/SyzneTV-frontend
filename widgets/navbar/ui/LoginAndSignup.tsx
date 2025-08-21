"use client";

import { routes } from "@/shared/config/routes";
import { Button, Link, NavbarItem } from "@heroui/react";
import React from "react";

const LoginAndSignup = () => {
  const openLoginPopup = (e: any) => {
    window.open(routes.login, "popup", "width=500,height=600");
  };
  const openSignupPopup = (e: any) => {
    window.open(routes.signup, "popup", "width=500,height=600");
  };
  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Button
          color="primary"
          variant="light"
          className="font-medium"
          onPress={openLoginPopup}
        >
          Login
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          onPress={openSignupPopup}
        >
          Sign Up
        </Button>
      </NavbarItem>
    </>
  );
};

export default LoginAndSignup;
