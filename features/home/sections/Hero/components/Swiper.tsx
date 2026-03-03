"use client";
import "swiper/css";
import { Badge } from "@/shared/libs/shadcn/ui/badge";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface HeroSwiperProps {
  data: {
    id: string;
    isClickable: boolean;
    title: string;
    tags: string[];
    description: string;
    buttonContent: string;
    buttonLink: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
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
        {props.data.map((slide) =>
          slide.imageUrl ? (
            // Slide with image background
            <SwiperSlide key={slide.id} className="relative overflow-hidden">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-80"
              />
              {slide.title && slide.description && (
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
                    {slide.tags.map((tag) => (
                      <Badge
                        className="bg-neutral-200 text-neutral-800"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-4 font-medium text-base max-w-[40vw] line-clamp-6">
                    {slide.description}
                  </p>
                  {slide.isClickable && (
                    <Button
                      size="lg"
                      onClick={() => router.push(slide.buttonLink)}
                      className="mt-6"
                    >
                      {slide.buttonContent}
                    </Button>
                  )}
                </div>
              )}
            </SwiperSlide>
          ) : (
            // Fallback for slides without image
            <SwiperSlide
              key={slide.id}
              className="relative overflow-hidden bg-neutral-800 flex flex-col items-center text-center pt-18"
            >
              <h1 className="text-6xl font-semibold tracking-tight">
                {slide.title}
              </h1>
              <div className="mt-4 flex justify-center gap-1.5">
                {slide.tags.map((tag) => (
                  <Badge className="bg-neutral-200 text-neutral-800" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 font-medium text-base max-w-[40vw] mx-auto">
                {slide.description}
              </p>
              {slide.isClickable && (
                <Button
                  size="lg"
                  onClick={() => router.push(slide.buttonLink)}
                  className="mt-6"
                >
                  {slide.buttonContent}
                </Button>
              )}
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
