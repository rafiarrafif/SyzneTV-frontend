import { backendFetch, BackendResponse } from "@/shared/helpers/backendFetch";
import HeroSwiper, { HeroSwiperProps } from "./components/Swiper";

const HeroMain = async () => {
  const testing = async () => {
    return (await backendFetch("hero-banner")) as BackendResponse<
      HeroSwiperProps["data"]
    >;
  };

  const response = await testing();
  if (!response.data) return <div></div>;

  return <HeroSwiper data={response.data} />;
};

export default HeroMain;
