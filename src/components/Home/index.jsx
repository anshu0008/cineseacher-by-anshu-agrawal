import React, { useEffect, useState } from "react";

import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useFuncDebounce from "hooks/useFuncDebounce";

import Movies from "./Movies";
import SearchBar from "./SearchBar";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);

  const debouncedSearchKey = useFuncDebounce(searchKey);
  const { data: { Search } = {} } = useMovieFetch({ s: debouncedSearchKey });

  useEffect(() => {
    setData(Search);
  }, [Search]);

  return (
    <div className="p-4">
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <Movies data={data} />
    </div>
  );
};
export default Home;
