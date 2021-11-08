import React, { Suspense } from "react";

function WIthSuspence({ children }) {
  return (
    <>
      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  );
}

export default WIthSuspence;
