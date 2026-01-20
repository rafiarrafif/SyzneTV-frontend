import {
  UserSession,
  validateAndDecodeJWT,
} from "../models/auth/validateAndDecodeJWT";
import AuthSessionProvider from "./AuthSession.client";

const AuthSessionProviderWrapper = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  let session: UserSession | null = await validateAndDecodeJWT();

  return (
    <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
  );
};

export default AuthSessionProviderWrapper;
