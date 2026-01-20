import { cookies } from "next/headers";
import React from "react";

const AuthSessionProvider = ({children}: readonly<{children: React.ReactNode}>) => {
  const cookieHeader = cookies().toString();
  console.log("Cookies in AuthSessionProvider:", cookieHeader);
  return <AuthContext.Provider value={{ cookie = cookieHeader }}>{children}</AuthContext.Provider>;
};

export default AuthSessionProvider;
