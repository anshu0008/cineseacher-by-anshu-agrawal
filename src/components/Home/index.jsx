import React, { useEffect, useState } from "react";

import SpinnerComponent from "components/Home/common/SpinnerComponent";
import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useDebounce from "hooks/useDebounce";
import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Pagination } from "neetoui";
import { isEmpty } from "ramda";
import { useHistory } from "react-router-dom";
import { buildUrl } from "utils/url";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import HistoryContainer from "./History/HistoryContainer";
import Movies from "./Movie/Movies";
import SearchBar from "./SearchBar";

const Home = () => {
  const history = useHistory();

  const { page, pageSize, searchTerm = "" } = useQueryParams();

  const [searchKey, setSearchKey] = useState(searchTerm || "");
  const [data, setData] = useState([]);
  const debouncedSearchKey = useDebounce(searchKey);
  const { data: { Search, totalResults } = {}, isFetching } = useMovieFetch({
    s: debouncedSearchKey,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    pageSize: Number(pageSize) || DEFAULT_PAGE_SIZE,
  });

  const handlePageNavigation = page =>
    history.replace(
      buildUrl("/", {
        page,
        pageSize: DEFAULT_PAGE_SIZE,
        searchTerm: searchKey,
      })
    );

  const updateQueryParams = useFuncDebounce(value => {
    const params = {
      page: DEFAULT_PAGE_INDEX,
      pageSize: DEFAULT_PAGE_SIZE,
      searchTerm: value || null,
    };

    if (value.length > 0) {
      history.replace(buildUrl("/", filterNonNull(params)));
    } else {
      history.replace(buildUrl("/"));
      setData(null);
    }
  });

  useEffect(() => {
    setData(Search || []);
    console.log(page, pageSize);
  }, [Search]);

  return (
    <div className="flex h-screen p-4">
      <div className="flex h-full w-3/4 flex-col">
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          updateQueryParams={updateQueryParams}
        />
        {isFetching && isEmpty(data) ? (
          <SpinnerComponent />
        ) : (
          <>
            <Movies data={data} />
            <div className="mt-5 self-end">
              <Pagination
                count={totalResults}
                navigate={handlePageNavigation}
                pageNo={Number(page) || DEFAULT_PAGE_INDEX}
                pageSize={Number(pageSize) || DEFAULT_PAGE_SIZE}
              />
            </div>
          </>
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
