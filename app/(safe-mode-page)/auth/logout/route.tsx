import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  (await cookies()).delete("auth_token");
  return NextResponse.redirect(new URL("/", request.url), 303);
};
