"use client";
import { addHeroBannerMediaToSaved } from "@/features/home/actions/Hero/addHeroBannerMediaToSaved";
import { useAuth } from "@/shared/contexts/AuthContext";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { Icon } from "@iconify/react";

const AddToList = ({ mediaId }: { mediaId: string }) => {
  const { session } = useAuth();

  const handleAddToList = async () => {
    const result = await addHeroBannerMediaToSaved(mediaId);
    console.log("Hasil dari fungsi server:", result);
  };

  return (
    <div>
      {session?.user && (
        <Button
          onClick={handleAddToList}
          variant="secondary"
          className="h-full flex gap-1 px-4 rounded-xl border border-neutral-400/10 bg-neutral-950/20 hover:bg-neutral-950/40 backdrop-blur-lg text-neutral-200"
        >
          <Icon icon="boxicons:bookmark" className="size-5.5" />
          <span>Add to List</span>
        </Button>
      )}
    </div>
  );
};

export default AddToList;
