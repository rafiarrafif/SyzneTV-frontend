"use client";
import { addHeroBannerMediaToSaved } from "@/features/home/actions/Hero/addHeroBannerMediaToSaved";
import { removeHeroBannerMediaFromSaved } from "@/features/home/actions/Hero/removeHeroBannerMediaFromSaved";
import { useAuth } from "@/shared/contexts/AuthContext";
import { BackendResponse } from "@/shared/helpers/backendFetch";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { Icon } from "@iconify/react";
import React from "react";

const AddToList = ({
  mediaId,
  isInCollection,
}: {
  mediaId: string;
  isInCollection: boolean;
}) => {
  const { session } = useAuth();
  const [isSaved, setIsSaved] = React.useState<boolean>(isInCollection);

  const handleAddToList = async () => {
    setIsSaved(!isSaved);
    const result = (await addHeroBannerMediaToSaved(mediaId).catch(
      (_) => void _,
    )) as BackendResponse<undefined>;
    if (!result || !result.success) {
      setIsSaved((prev) => !prev);
    }
  };
  const handleRemoveFromList = async () => {
    setIsSaved(!isSaved);
    const result = (await removeHeroBannerMediaFromSaved(mediaId).catch(
      (_) => void _,
    )) as BackendResponse<undefined>;
    if (!result || !result.success) {
      setIsSaved((prev) => !prev);
    }
  };

  return (
    <div>
      {session?.user &&
        (isSaved ? (
          <Button
            onClick={handleRemoveFromList}
            variant="secondary"
            className="h-full flex gap-1 px-4 rounded-xl border border-neutral-400/10 bg-neutral-950/20 hover:bg-neutral-950/40 backdrop-blur-lg text-neutral-200"
          >
            <Icon icon="boxicons:bookmark-filled" className="size-5.5" />
            <span>Remove from List</span>
          </Button>
        ) : (
          <Button
            onClick={handleAddToList}
            variant="secondary"
            className="h-full flex gap-1 px-4 rounded-xl border border-neutral-400/10 bg-neutral-950/20 hover:bg-neutral-950/40 backdrop-blur-lg text-neutral-200"
          >
            <Icon icon="boxicons:bookmark" className="size-5.5" />
            <span>Add to List</span>
          </Button>
        ))}
    </div>
  );
};

export default AddToList;
