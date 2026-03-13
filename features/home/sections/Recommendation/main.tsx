import { getRecommendationAnimeAction } from "../../actions/getRecommenationAnime";
import AnimeRecommendationCard from "./components/Card";

const RecommendationMain = async () => {
  const data = async () => await getRecommendationAnimeAction();
  const result = await data();
  return (
    <div className="flex gap-2 w-full overflow-x-scroll py-2 my-2">
      {result.map((item, index) => (
        <AnimeRecommendationCard data={item} key={index} />
      ))}
    </div>
  );
};

export default RecommendationMain;
