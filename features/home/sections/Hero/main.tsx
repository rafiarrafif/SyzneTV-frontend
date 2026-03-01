import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "@/shared/libs/shadcn/ui/badge";

// Dummy data for slides, This only for testing, replace with actual data later
const dummyData = [
  {
    id: "jo21j189289",
    isClickable: true,
    title: "Yosuga no Sora",
    tags: ["Romance", "Drama", "Ecchi"],
    description:
      "A story about two siblings who fall in love with each other. This is a controversial anime that has been criticized for its incestuous themes. Viewer discretion is advised. Also, this anime is not suitable for children. Please watch it at your own risk.",
    buttonContent: "Watch Now",
    buttonLink: "https://www.example.com/yosuga-no-sora",
    imageUrl:
      "https://asset.tribunnews.com/rDUJvGRU7_qDX-G4IFc5tUn08vw=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/style/foto/bank/originals/sora-kasugano-karakter-dalam-anime-dewasa-yosuga-no-sora.jpg",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "jo21j189290",
    isClickable: true,
    title: "Redo of Healer",
    tags: ["Action", "Fantasy", "Ecchi"],
    description:
      "A story about a healer who seeks revenge on those who wronged him. This is a controversial anime that has been criticized for its graphic violence and sexual content. Viewer discretion is advised. Also, this anime is not suitable for children. Please watch it at your own risk.",
    buttonContent: "Watch Now",
    buttonLink: "https://www.example.com/redo-of-healer",
    imageUrl: "https://miro.medium.com/v2/1*O5bv-7EXnRC-VWmqimVEow.jpeg",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "jo21j189291",
    isClickable: true,
    title: "Warning System",
    tags: [],
    description:
      "This is a warning system for anime that contain controversial content. This system is designed to inform viewers about the potential risks of watching certain anime. Viewer discretion is advised. Please watch these anime at your own risk.",
    buttonContent: "Learn More",
    buttonLink: "https://www.example.com/boku-no-pico",
    imageUrl: "",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "dwasdasdasd",
    isClickable: false,
    title: "",
    tags: [],
    description: "",
    buttonContent: "",
    buttonLink: "",
    imageUrl:
      "https://wallpapers.com/images/featured/cool-boy-anime-y61kpjindsmr277u.jpg",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
];
// End of dummy data

const Hero = () => {
  const router = useRouter();
  return (
    <div className="h-120 rounded-lg overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {dummyData.map((slide) =>
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
              <div className="mt-4 flex justify-center                                                                                                   h gap-1.5">
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

export default Hero;
