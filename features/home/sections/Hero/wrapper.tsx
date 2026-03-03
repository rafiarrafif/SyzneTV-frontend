import { Suspense } from "react";
import HeroSkeleton from "./skeleton";
import HeroMain from "./main";

const Hero = () => {
  return (
    <div className="h-120 w-full">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroMain />
      </Suspense>
    </div>
  );
};

export default Hero;
