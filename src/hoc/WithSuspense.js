import React, { Suspense } from "react";

function WithSuspence({ children }) {
  return (
    <>
      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  );
}

export default WithSuspence;
