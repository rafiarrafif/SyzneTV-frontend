import { Suspense } from "react";
import RecommendationMain from "./main";
import RecommendationSkeleton from "./skeleton";

const Recommendation = async () => {
  return (
    <div className="mt-12 relative">
      <div className="flex justify-between">
        <h1 className="text-[26px] text-neutral-100 font-semibold w-fit tracking-tight">
          Maybe You Like
        </h1>
      </div>
      <Suspense fallback={<RecommendationSkeleton />}>
        <RecommendationMain />
      </Suspense>
    </div>
  );
};

export default Recommendation;
