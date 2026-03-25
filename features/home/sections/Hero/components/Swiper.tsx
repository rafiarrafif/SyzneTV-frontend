"use client";
import "swiper/css";
import { Badge } from "@/shared/libs/shadcn/ui/badge";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

export interface HeroSwiperProps {
  data: {
    id: string;
    title: string;
    slug: string;
    imageUrl: string;
    synopsis: string;
    genres: {
      slug: string;
      name: string;
    }[];
  }[];
}

const HeroSwiper = (props: HeroSwiperProps) => {
  const router = useRouter();
  return (
    <div className="h-full rounded-lg overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {props.data.map((slide) => (
          <SwiperSlide key={slide.id} className="relative overflow-hidden">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-80"
            />
            <div
              className="absolute top-0 left-0 z-10 h-full w-full py-16 px-20"
              style={{
                background:
                  "linear-gradient(90deg,rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.42) 46%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <h1 className="text-6xl font-semibold tracking-tight">
                {slide.title}
              </h1>
              <div className="mt-4 flex gap-1.5">
                {slide.genres.map((genre) => (
                  <Badge
                    className="bg-neutral-200 text-neutral-800"
                    key={genre.slug}
                  >
                    {genre.name}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 font-medium text-base max-w-[40vw] line-clamp-6">
                {slide.synopsis}
              </p>
              <Button
                size="lg"
                onClick={() => router.push(`/media/${slide.slug}`)}
                className="mt-6 h-12 rounded-xl flex gap-2 px-4 hover:bg-neutral-950 group"
              >
                <div className="bg-neutral-950 p-2 rounded-full group-hover:bg-primary">
                  <Icon
                    icon="solar:play-bold"
                    className="text-primary group-hover:text-neutral-950"
                  />
                </div>
                <span className="font-semibold text-neutral-950 group-hover:text-primary">
                  Watch Now
                </span>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
