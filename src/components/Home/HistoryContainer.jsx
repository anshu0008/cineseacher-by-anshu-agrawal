import NoMovies from "src/common/NoMovies";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const HistoryContainer = () => {
  const { historyCart } = useHistoryItemsStore();

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-white p-4">
      <h1 className="mb-2 text-center text-xl font-bold">View History</h1>
      {historyCart.length === 0 ? (
        <NoMovies title="No History Found" />
      ) : (
        <div className="flex h-full flex-col gap-3 overflow-y-auto">
          {historyCart.map((item, index) => (
            <div
              className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-300 p-2 text-sm font-bold shadow-sm hover:bg-blue-500 hover:text-white"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryContainer;
