import React from "react";

interface PageProps {
  params: { provider: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = ({ params, searchParams }: PageProps) => {
  return (
    <>
      <h1>Nama provider: {params.provider}</h1>
      <h1>Data provider: {JSON.stringify(searchParams)}</h1>
    </>
  );
};

export default page;
