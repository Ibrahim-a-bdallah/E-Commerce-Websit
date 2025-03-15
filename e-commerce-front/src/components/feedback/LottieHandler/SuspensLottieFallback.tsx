import React, { Suspense } from "react";
import LottieHandler from "./LottieHandler";

type Tprops = {
  styled?: string;
  children: React.ReactNode;
  type?: "loading" | "error" | "networkError" | "empty" | "notFound" | "fill";
};

const SuspensLottieFallback = ({
  children,
  type,
  styled = "mt-5 mb-2",
}: Tprops) => {
  return (
    <Suspense
      fallback={
        <LottieHandler
          styled={styled}
          type={type ?? "fill"}
          message="Please Wait..."
        />
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspensLottieFallback;
