import React, { useEffect, useState } from "react";

import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import SpinnerComponent from "src/common/SpinnerComponent";

import HistoryContainer from "./HistoryContainer";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);

  const debouncedSearchKey = useFuncDebounce(searchKey);
  const { data: { Search } = {} } = useMovieFetch({ s: debouncedSearchKey });

  useEffect(() => {
    setData(Search || []);
  }, [Search]);

  return (
    <div className="flex h-screen overflow-hidden p-4">
      <div className="flex w-3/4 flex-col">
        <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
        {data.length === 0 && searchKey.length > 0 ? (
          <SpinnerComponent />
        ) : (
          <Movies data={data} />
        )}
      </div>
      <div className="ml-10 flex h-full w-1/4 flex-col overflow-hidden border-l-2 border-gray-300 p-4">
        <div className="flex-1 overflow-y-auto">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
