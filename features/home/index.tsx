import Hero from "./sections/Hero/wrapper";
import Recommendation from "./sections/Recommendation/wrapper";

const HomeIndex = () => {
  return (
    <div className="w-full pt-4">
      <Hero />
      <Recommendation />
    </div>
  );
};

export default HomeIndex;
