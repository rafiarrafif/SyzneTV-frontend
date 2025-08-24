"use server";
import { api } from "@/shared/api/connector";

const getOauthProviderList = async () => {
  const res = await api.get(`auth/providers`);
  return res.json();
};

export default getOauthProviderList;
