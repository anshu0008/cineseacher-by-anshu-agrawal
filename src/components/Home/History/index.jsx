import NoMovies from "components/common/ShowEmptyData";
import { Delete } from "neetoicons";
import { Typography } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const HistoryContainer = () => {
  const { historyCart } = useHistoryItemsStore();

  return (
    <div className="flex h-full w-full flex-col rounded-lg p-4">
      <div className="mb-8 flex items-center justify-between text-lg font-semibold">
        <Typography style="h3">View History</Typography>
        <Typography className="cursor-pointer text-red-500">
          Clear all
        </Typography>
      </div>
      {historyCart.length === 0 ? (
        <NoMovies title="No History Found" />
      ) : (
        <div className="flex h-full flex-col gap-3 overflow-y-auto">
          {historyCart.map((item, index) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-300 p-3 text-sm font-semibold shadow-sm hover:bg-blue-500 hover:text-white"
              key={index}
            >
              {item}
              <Delete />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryContainer;
