"use server";

export type RecommendationAnime = {
  title: string;
  rating?: number;
  type: string;
  status: string;
  episodes: number;
  release_year: string;
  thumbnail_url: string;
};

export const getRecommendationAnimeAction = async (): Promise<
  RecommendationAnime[]
> => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      title: "Frieren: Beyond Journey's End",
      rating: 9.39,
      type: "TV",
      status: "finished",
      episodes: 28,
      release_year: "2023",
      thumbnail_url: "https://m.media-amazon.com/images/I/816AbVQc+0L.jpg",
    },
    {
      title: "Steins;Gate",
      rating: 9.07,
      type: "TV",
      status: "finished",
      episodes: 24,
      release_year: "2011",
      thumbnail_url:
        "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Spirited Away",
      rating: 8.78,
      type: "Movie",
      status: "finished",
      episodes: 1,
      release_year: "2001",
      thumbnail_url:
        "https://printedoriginals.com/cdn/shop/products/spirited-away-french-143975.jpg?v=1602427397",
    },
    {
      title: "One Piece",
      rating: 8.72,
      type: "TV",
      status: "airing",
      episodes: 1100,
      release_year: "1999",
      thumbnail_url: "https://myanimelist.net/images/anime/1244/138851.jpg",
    },
    {
      title: "Cyberpunk: Edgerunners",
      rating: 8.6,
      type: "ONA",
      status: "finished",
      episodes: 10,
      release_year: "2022",
      thumbnail_url:
        "https://myanimelist.net/images/about_me/ranking_items/14292440-859e4272-536e-4760-845f-78fb48eccafe.jpg?t=1767555420",
    },
    {
      title: "Your Name",
      rating: 8.85,
      type: "Movie",
      status: "finished",
      episodes: 1,
      release_year: "2016",
      thumbnail_url:
        "https://m.media-amazon.com/images/M/MV5BMjM4YTE3OGEtYTY1OS00ZWEzLTg1OTctMTkyODA0ZDM3ZmJlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Hunter x Hunter (2011)",
      rating: 9.04,
      type: "TV",
      status: "finished",
      episodes: 148,
      release_year: "2011",
      thumbnail_url: "https://myanimelist.net/images/anime/1337/99013.jpg",
    },
    {
      title: "Hellsing Ultimate",
      rating: 8.36,
      type: "OVA",
      status: "finished",
      episodes: 10,
      release_year: "2006",
      thumbnail_url: "https://cdn.myanimelist.net/images/anime/6/7333l.jpg",
    },
    {
      title: "Tower of God Season 2",
      rating: 7.5,
      type: "TV",
      status: "airing",
      episodes: 12,
      release_year: "2024",
      thumbnail_url:
        "https://www.animationmagazine.net/wordpress/wp-content/uploads/TOG2_ENLOGO_v2.jpg",
    },
    {
      title: "Violet Evergarden: The Movie",
      rating: 8.89,
      type: "Movie",
      status: "finished",
      episodes: 1,
      release_year: "2020",
      thumbnail_url: "https://myanimelist.net/images/anime/1614/106512l.jpg",
    },
    {
      title: "Devilman Crybaby",
      rating: 7.75,
      type: "ONA",
      status: "finished",
      episodes: 10,
      release_year: "2018",
      thumbnail_url: "https://myanimelist.net/images/anime/1046/122722.jpg",
    },
    {
      title: "Mobile Suit Gundam: The Origin",
      rating: 8.42,
      type: "OVA",
      status: "finished",
      episodes: 6,
      release_year: "2015",
      thumbnail_url: "https://myanimelist.net/images/anime/4/72702.jpg",
    },
  ];
};
