"use server";
import { api } from "@/shared/api/connector";

const getGoogleAuthUrl = async () => {
  const res = await api.get(`debug`);
  return res.json();
};

export default getGoogleAuthUrl;
