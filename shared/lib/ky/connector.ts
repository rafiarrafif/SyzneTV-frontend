"use server";

import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.MAIN_BACKEND_API_URL,
  credentials: "include",
  headers: {
    access_token: process.env.MAIN_BACKEND_API_KEY,
  },
  retry: 0,
});
