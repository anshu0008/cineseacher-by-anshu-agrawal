// eslint-disable-next-line import/order
import React from "react";
import { Spinner } from "neetoui";

const SpinnerComponent = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner size="lg" />
    </div>
  </div>
);

export default SpinnerComponent;
