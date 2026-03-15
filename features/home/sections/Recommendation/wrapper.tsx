import { Suspense } from "react";
import RecommendationMain from "./main";
import RecommendationSkeleton from "./skeleton";
import ScrollingButton from "./components/ScrollingButton";

const Recommendation = async () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <h1 className="text-[26px] text-neutral-100 font-semibold w-fit tracking-tight">
          Maybe You Like
        </h1>
        <div>
          <ScrollingButton />
        </div>
      </div>
      <Suspense fallback={<RecommendationSkeleton />}>
        <RecommendationMain />
      </Suspense>
    </div>
  );
};

export default Recommendation;
