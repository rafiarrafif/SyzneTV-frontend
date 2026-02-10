"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UAParser } from "ua-parser-js";

export interface BackendResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
}

export const backendFetch = async (path: string, options: RequestInit = {}) => {
  const userAgent = (await headers()).get("user-agent") || "";
  const userIp = (await headers()).get("x-forwarded-for") || "unknown";
  const ua = new UAParser(userAgent).getResult();
  const clientInfo = {
    os: ua.os.name ?? "unknown",
    osVersion: ua.os.version ?? "unknown",
    browser: ua.browser.name ?? "unknown",
    browserVersion: ua.browser.version ?? "unknown",
    deviceType: ua.device.type ?? "desktop",
    ip: userIp,
  };

  try {
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}/${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-client-info": JSON.stringify(clientInfo),
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
        cookie: (await headers()).get("cookie") || "",
        ...options.headers,
      },
      cache: "default",
    });

    const resJson = (await res.json()) as BackendResponse;

    if (!res.ok || !resJson.success) {
      throw new Error(`Elysia error: ${resJson.error}`);
    }

    return resJson;
  } catch {
    redirect("/status?reason=backend-unreachable");
  }
};
