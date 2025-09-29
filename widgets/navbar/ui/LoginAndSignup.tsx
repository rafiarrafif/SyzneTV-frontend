"use client";

import { routes } from "@/shared/config/routes";
import { Button, Link, NavbarItem } from "@heroui/react";
import React from "react";

const LoginAndSignup = () => {
  const openPopupWindow = (href: string) => {
    window.open(href, "popup", "width=500,height=600");
  };
  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Button
          color="primary"
          variant="light"
          className="font-medium"
          onPress={() => openPopupWindow(routes.login)}
        >
          Login
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          onPress={() => openPopupWindow(routes.signup)}
        >
          Sign Up
        </Button>
      </NavbarItem>
    </>
  );
};

export default LoginAndSignup;
