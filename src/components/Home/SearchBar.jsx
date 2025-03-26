import React, { useEffect, useRef } from "react";

import { Search } from "neetoicons";
import { Input } from "neetoui";

const SearchBar = ({ searchKey, updateQueryParams, setSearchKey }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div>
      <Input
        className="w-full border-gray-300"
        placeholder="Search Pictures"
        prefix={<Search />}
        ref={inputRef}
        type="search"
        value={searchKey}
        onChange={e => {
          updateQueryParams(e.target.value);
          setSearchKey(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
