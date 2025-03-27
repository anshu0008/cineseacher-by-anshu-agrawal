import { useState } from "react";

import ShowEmptyData from "components/common/ShowEmptyData";
import { Delete } from "neetoicons";
import { Button, Typography } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

import DeleteModal from "./Modal";

const HistoryContainer = () => {
  const { historyCart } = useHistoryItemsStore();
  const [isOpen, setIsOpen] = useState(false);
  const [clearAll, setClearAll] = useState(false);

  const hadleClearAll = () => {
    setIsOpen(true);
    setClearAll(true);
  };

  return (
    <div className="flex h-full w-full flex-col rounded-lg p-4">
      <div className="mb-8 flex items-center justify-between text-lg font-semibold">
        <Typography style="h3">View History</Typography>
        <Button style="danger-text" type="reset" onClick={hadleClearAll}>
          Clear all
        </Button>
      </div>
      {historyCart.length === 0 ? (
        <ShowEmptyData description="No History Found" />
      ) : (
        <div className="flex h-full flex-col gap-3 overflow-y-auto">
          {historyCart.map(({ Title, imdbId }, index) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-300 p-3 text-sm font-semibold shadow-sm hover:bg-blue-500 hover:text-white"
              key={index}
            >
              {Title}
              <Button
                className="bg-"
                icon={Delete}
                size="large"
                style="icon"
                onClick={() => setIsOpen(true)}
              />
              <DeleteModal
                {...{ imdbId, isOpen, setIsOpen, Title, clearAll, setClearAll }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryContainer;
