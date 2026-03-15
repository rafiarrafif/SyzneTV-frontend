"use client";

import { useRef } from "react";
import { RecommendationAnime } from "../../actions/getRecommenationAnime";
import AnimeRecommendationCard from "./components/Card";
import ScrollingButton from "./components/ScrollingButton";

const RecommendationClient = ({
  result,
}: {
  result: RecommendationAnime[];
}) => {
  const scrollingContainer = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    console.log("scroll left");
    if (scrollingContainer.current) {
      scrollingContainer.current.scrollBy({ left: -788, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    console.log("scroll right");
    if (scrollingContainer.current) {
      scrollingContainer.current.scrollBy({ left: 788, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="absolute top-0 right-0">
        <ScrollingButton scrollLeft={scrollLeft} scrollRight={scrollRight} />
      </div>
      <div
        className="flex gap-2 w-full overflow-x-scroll py-2 mt-2 hide-scrollbar relative"
        ref={scrollingContainer}
      >
        {result.map((item, index) => (
          <AnimeRecommendationCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationClient;
