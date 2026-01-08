import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <div>
      <h1>Loading....</h1>
    </div>
  );
};

export default page;
