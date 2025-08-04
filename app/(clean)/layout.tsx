import React from "react";

const clearLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default clearLayout;
