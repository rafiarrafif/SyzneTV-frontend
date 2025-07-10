import Button from "./button";
import { metadata } from "./metadata";
export { metadata };

import React from "react";

const page = () => {
  return (
    <main>
      <div className="text-center text-3xl mt-6">Nounoz TV</div>
      <div>
        <Button />
      </div>
    </main>
  );
};

export default page;
