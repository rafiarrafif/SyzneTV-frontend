import { RecommendationAnime } from "@/features/home/actions/getRecommenationAnime";
import { Icon } from "@iconify/react";
import { StarOff } from "lucide-react";

const AnimeRecommendationCard = ({ data }: { data: RecommendationAnime }) => {
  return (
    <div>
      <div className="w-64 h-88 rounded-lg overflow-hidden relative">
        <div className="absolute right-2 top-2 bg-amber-400 text-neutral-950 font-semibold flex gap-0.5 items-center py-1 px-2 rounded">
          <Icon icon="material-symbols:star-rounded" className="h-auto w-4" />
          <span className="text-sm tracking-tight">{data.rating ?? "N/A"}</span>
        </div>
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
