"use server";

import { backendFetch } from "@/shared/helpers/backendFetch";

export const removeHeroBannerMediaFromSaved = async (mediaId: string) => {
  try {
    return await backendFetch("collections/sys", {
      method: "DELETE",
      body: JSON.stringify({
        name: "Saved",
        itemId: mediaId,
      }),
    });
  } catch (error) {
    console.error("Error removing media from saved list:", error);
    return {
      success: false,
      message: "Failed to remove media from saved list.",
    };
  }
};
