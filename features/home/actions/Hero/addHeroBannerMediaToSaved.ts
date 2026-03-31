"use server";

import { backendFetch } from "@/shared/helpers/backendFetch";

export const addHeroBannerMediaToSaved = async (mediaId: string) => {
  try {
    return await backendFetch("collections/sys", {
      method: "POST",
      body: JSON.stringify({
        name: "Saved",
        itemId: mediaId,
      }),
    });
  } catch (error) {
    console.error("Error adding media to saved list:", error);
    return { success: false, message: "Failed to add media to saved list." };
  }
};
