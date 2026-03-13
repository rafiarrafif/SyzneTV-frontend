import { RecommendationAnime } from "@/features/home/actions/getRecommenationAnime";

const AnimeRecommendationCard = ({ data }: { data: RecommendationAnime }) => {
  return (
    <div>
      <div className="w-64 h-88 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data.thumbnail_url}
          alt={data.title}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default AnimeRecommendationCard;
