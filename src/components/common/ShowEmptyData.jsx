import React from "react";

import { NoData } from "neetoui";

const ShowEmptyData = ({ title = "" }) => (
  <div className="flex h-full w-full items-center justify-center">
    <NoData className="text-gray-500" description={title} />
  </div>
);

export default ShowEmptyData;
