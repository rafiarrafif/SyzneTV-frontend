"use client";
import Image from "next/image";
import NavigationLink from "./NavigationLink";

const Navbar = () => {
  return (
    <div className="absolute z-10 top-0 w-full h-16 flex items-center">
      <Image
        src="/logo/astofo-long.png"
        alt="Astofo Logo"
        width={120}
        height={0}
        draggable={false}
      />
      <NavigationLink />
    </div>
  );
};

export default Navbar;
