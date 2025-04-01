import React from "react";

import SpinnerWrapper from "components/common/SpinnerWrapper";
import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Pagination } from "neetoui";
import { isEmpty } from "ramda";
import { useHistory } from "react-router-dom";
import { routes } from "src/route";
import { buildUrl } from "utils/url";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import HistoryContainer from "./History";
import Movies from "./Movie";
import SearchBar from "./Search/SearchBar";

const Home = () => {
  const history = useHistory();

  const { page, searchTerm = "", year, type } = useQueryParams();

  const params = {
    searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    year: Number(year) || null,
    type: type || null,
  };

  const { data: { search: movies, totalResults, response } = {}, isFetching } =
    useMovieFetch({
      s: searchTerm,
      page: Number(page) || DEFAULT_PAGE_INDEX,
      pageSize: DEFAULT_PAGE_SIZE,
      y: Number(year) || null,
      type: type || null,
    });

  const handlePageNavigation = page =>
    history.replace(
      buildUrl(
        routes.movies.index,
        filterNonNull({
          ...params,
          page,
        })
      )
    );

  const updateQueryParams = useFuncDebounce(updatedValue => {
    const updatedParam = {
      ...params,
      ...updatedValue,
    };

    history.push(
      isEmpty(updatedParam.searchTerm)
        ? buildUrl(routes.movies.index)
        : buildUrl(routes.movies.index, filterNonNull(updatedParam))
    );
  });

  return (
    <div className="flex h-full bg-gray-50">
      <div className="flex h-full w-3/4 flex-col p-4">
        <SearchBar
          {...{
            searchTerm,
            updateQueryParams,
            year,
            type,
          }}
        />
        {isFetching ? <SpinnerWrapper /> : <Movies {...{ response, movies }} />}
        <div className="mt-5 self-end">
          <Pagination
            count={totalResults || 1}
            navigate={handlePageNavigation}
            pageNo={Number(page) || DEFAULT_PAGE_INDEX}
            pageSize={DEFAULT_PAGE_SIZE}
          />
        </div>
      </div>
      <div className="ml-10 flex h-5/6 w-1/4 flex-col overflow-hidden border-l-2 border-gray-300">
        <div className="overflow-y-auto">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
