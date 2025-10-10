import { customAlphabet } from "nanoid";

export const generateRandomString = (length: number = 10): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return customAlphabet(characters, length)();
};
