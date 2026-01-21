"use client";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
import SignIn from "./SignIn";
import { useAuth } from "@/shared/contexts/AuthContext";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const { session } = useAuth();

  return (
    <div className="absolute z-10 top-0 w-full h-16 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/logo/astofo-long.png"
          alt="Astofo Logo"
          width={120}
          height={0}
          draggable={false}
        />
        <NavigationLink />
      </div>
      <div>{session?.user ? <UserProfile /> : <SignIn />}</div>
    </div>
  );
};

export default Navbar;
