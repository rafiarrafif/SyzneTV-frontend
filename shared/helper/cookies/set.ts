"use server";

import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string, sec?: number) => {
  (await cookies()).set({
    name,
    value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: sec || Number(process.env.SESSION_EXPIRE),
  });
};
