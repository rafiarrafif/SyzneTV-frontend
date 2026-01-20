"use client";
import { AuthContext } from "../contexts/AuthContext";
import React from "react";
import { UserSession } from "../models/auth/validateAndDecodeJWT";

const AuthSessionProvider = ({
  children,
  session,
}: Readonly<{ children: React.ReactNode; session: UserSession | null }>) => {
  return (
    <AuthContext.Provider value={{ session: session }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthSessionProvider;
