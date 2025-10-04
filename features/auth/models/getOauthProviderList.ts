"use server";
import { api } from "@/shared/lib/ky/connector";

const getOauthProviderList = async () => {
  try {
    const res = await api.get(`auth/providers`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch OAuth providers", { cause: error });
  }
};

export default getOauthProviderList;
