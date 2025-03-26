import React from "react";

import { NoData } from "neetoui";

const NoMovies = ({ title = "" }) => (
  <div className="flex h-full w-full items-center justify-center">
    <NoData className="text-2xl font-bold text-gray-500" title={title} />
  </div>
);

export default NoMovies;
