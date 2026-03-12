import { getRecommendationAnimeAction } from "../../actions/getRecommenationAnime";

const RecommendationMain = async () => {
  const data = async () => await getRecommendationAnimeAction();
  const result = await data();
  return (
    <div>
      <div>{JSON.stringify(result)}</div>
    </div>
  );
};

export default RecommendationMain;
