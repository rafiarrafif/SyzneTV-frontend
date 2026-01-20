import { createContext, useContext } from "react";
import { UserSession } from "../models/auth/validateAndDecodeJWT";

type AuthContextType = {
  session: UserSession | null;
};

export const AuthContext = createContext<AuthContextType>({
  session: null,
});

export function useAuth() {
  return useContext(AuthContext);
}
