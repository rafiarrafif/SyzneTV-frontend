"use client";

import { routes } from "@/shared/config/routes";
import { Button, Link, NavbarItem } from "@heroui/react";
import React from "react";

const LoginAndSignup = () => {
  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Link href={routes.login} className="font-medium">
          Login
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          as={Link}
          href={routes.signup}
        >
          Sign Up
        </Button>
      </NavbarItem>
    </>
  );
};

export default LoginAndSignup;
