import AuthSessionProviderWrapper from "@/shared/providers/AuthSession";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <AuthSessionProviderWrapper>{children}</AuthSessionProviderWrapper>
    </div>
  );
};

export default layout;
