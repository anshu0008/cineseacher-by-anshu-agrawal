import React, { useEffect, useState } from "react";

import SpinnerComponent from "components/Home/common/SpinnerComponent";
import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import { Pagination } from "neetoui";
// import { useHistory } from "react-router-dom";
// import { buildUrl } from "utils/url";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import HistoryContainer from "./History/HistoryContainer";
import Movies from "./Movie/Movies";
import SearchBar from "./SearchBar";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_INDEX);

  // const history = useHistory();

  const debouncedSearchKey = useFuncDebounce(searchKey);
  const { data: { Search, totalResults } = {}, isLoading } = useMovieFetch({
    s: debouncedSearchKey,
    page: currentPage,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  // const handlePageNavigation = page =>
  //   history.replace(buildUrl("/search", { page, pageSize: DEFAULT_PAGE_SIZE }));

  useEffect(() => {
    setData(Search || []);
  }, [Search]);

  return (
    <div className="flex h-screen p-4">
      <div className="flex h-full w-3/4 flex-col">
        <SearchBar
          searchKey={searchKey}
          setCurrentPage={setCurrentPage}
          setSearchKey={setSearchKey}
        />
        {isLoading && searchKey.length > 0 ? (
          <SpinnerComponent />
        ) : (
          <Movies data={data} />
        )}
        <div className="mt-5 self-end">
          <Pagination
            count={totalResults}
            navigate={page => setCurrentPage(page)}
            pageNo={currentPage || DEFAULT_PAGE_INDEX}
            pageSize={DEFAULT_PAGE_SIZE}
          />
        </div>
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
