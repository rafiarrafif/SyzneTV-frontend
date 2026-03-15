import { getRecommendationAnimeAction } from "../../actions/getRecommenationAnime";
import RecommendationClient from "./main.client";

const RecommendationMain = async () => {
  const data = async () => await getRecommendationAnimeAction();
  const result = await data();
  return <RecommendationClient result={result} />;
};

export default RecommendationMain;
