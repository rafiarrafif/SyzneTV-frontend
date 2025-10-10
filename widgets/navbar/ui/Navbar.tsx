"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { routes } from "../../../shared/config/routes";
import LoginAndSignup from "./LoginAndSignup";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarUI = () => {
  const pathNameNow = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarItems = [
    {
      title: "Home",
      route: routes.home,
    },
    {
      title: "Explore",
      route: routes.explore,
    },
    {
      title: "Trending",
      route: routes.trending,
    },
    {
      title: "Genres",
      route: routes.genres,
    },
    {
      title: "Schedule",
      route: routes.schedule,
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navbarItems.map((item, index) => {
          const isActive = item.route === pathNameNow;

          return (
            <NavbarItem key={index} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={isActive ? "" : item.route}
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-1">
        <LoginAndSignup />
      </NavbarContent>

      <NavbarMenu>
        {navbarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.route}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarUI;
