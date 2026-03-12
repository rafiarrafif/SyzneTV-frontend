import { Suspense } from "react";
import RecommendationMain from "./main";
import RecommendationSkeleton from "./skeleton";
import { getRecommendationAnimeAction } from "../../actions/getRecommenationAnime";

const Recommendation = async () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl text-neutral-100 font-semibold w-fit">
        Maybe You Like
        <div className="w-full h-0.5 bg-primary -mt-1.5" />
      </h1>
      <Suspense fallback={<RecommendationSkeleton />}>
        <RecommendationMain />
      </Suspense>
    </div>
  );
};

export default Recommendation;
