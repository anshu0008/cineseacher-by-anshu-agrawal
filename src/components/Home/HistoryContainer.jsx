const HistoryContainer = () => {
  const history = [
    "Batman",
    "Superman",
    "Spiderman",
    "Ironman",
    "Hulk",
    "Captain America",
    "Thor",
    "Black Widow",
    "Black Panther",
    "Doctor Strange",
    "Batman",
    "Superman",
    "Spiderman",
    "Ironman",
    "Hulk",
    "Captain America",
    "Thor",
    "Black Widow",
    "Black Panther",
    "Doctor Strange",
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-white p-4">
      <h1 className="mb-2 text-center text-xl font-bold">View History</h1>
      <div className="flex h-full flex-col gap-3 overflow-y-auto">
        {history.map((item, index) => (
          <div
            className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-300 p-2 text-sm font-bold shadow-sm hover:bg-blue-500 hover:text-white"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryContainer;
