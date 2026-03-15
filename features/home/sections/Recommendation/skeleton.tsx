import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";

const RecommendationSkeleton = () => {
  const skeletonLenght = 6;

  return (
    <div className="flex gap-2 w-full overflow-hidden mt-4">
      {[...Array(skeletonLenght)].map((_, index) => (
        <div key={index}>
          <Skeleton className="h-88 w-64" />
          <Skeleton className="mt-3 h-6 w-64 rounded-full" />
          <Skeleton className="mt-1 h-4 w-12 rounded-full" />
        </div>
      ))}
    </div>
  );
};

export default RecommendationSkeleton;
