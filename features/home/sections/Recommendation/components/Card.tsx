import { RecommendationAnime } from "@/features/home/actions/getRecommenationAnime";
import { Icon } from "@iconify/react";

const AnimeRecommendationCard = ({ data }: { data: RecommendationAnime }) => {
  return (
    <div>
      <div className="w-64 h-88 rounded-lg overflow-hidden relative">
        {data.status === "airing" && (
          <div className="absolute top-2 left-2 bg-neutral-800 flex items-center gap-0.5 px-2 py-1 rounded-full">
            <Icon
              icon="icon-park-outline:dot"
              className="h-auto w-4 text-red-500 blink-strobe"
            />
            <span className="text-xs font-medium">Airing</span>
          </div>
        )}
        <div className="absolute right-2 top-2 bg-amber-400 text-neutral-950 flex items-center py-1 px-1.5 rounded">
          <Icon icon="material-symbols:star-rounded" className="h-auto w-4" />
          <span className="text-xs tracking-tight font-medium">
            {data.rating ?? "N/A"}
          </span>
        </div>
        <img
          className="w-full h-full object-cover"
          src={data.thumbnail_url}
          alt={data.title}
          draggable={false}
        />
      </div>
      <div className="mt-3 px-1 mb-1">
        <h3 className=" font-semibold mt-1 line-clamp-1">{data.title}</h3>
        <div className="flex gap-2 text-sm text-neutral-400 mt-0.5">
          <span>{data.release_year}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeRecommendationCard;
