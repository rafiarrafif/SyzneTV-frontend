"use server";

import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";
import { cookies } from "next/headers";

export interface UserSession {
  id: string;
  isAuthenticated: boolean;
  validUntil: Date;
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    birthDate: null;
    bioProfile: null;
    preference: {
      id: string;
      userId: string;
      langPreference: null;
      adultFiltering: string;
      adultAlert: string;
      videoQuality: string;
      serviceDefaultId: null;
    };
  };
  iat: number;
  exp: number;
}

export const validateAndDecodeJWT = async (): Promise<UserSession> => {
  const cookieHeader = (await cookies()).get("auth_token")?.value;
  const res = (await backendFetch("auth/token/validate", {
    method: "POST",
    body: JSON.stringify({
      token: cookieHeader,
    }),
  })) as BackendResponse<UserSession>;

  return res.data!;
};
