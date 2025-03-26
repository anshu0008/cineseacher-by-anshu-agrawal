import React, { useEffect, useRef } from "react";

import { Search } from "neetoicons";
import { Input } from "neetoui";

const SearchBar = ({ searchKey, setSearchKey, setCurrentPage }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === "/") {
        event.preventDefault(); // Prevent default browser search
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleChange = value => {
    setCurrentPage(1);
    setSearchKey(value);
  };

  return (
    <div>
      <Input
        className="w-full border-gray-300"
        placeholder="Search Pictures"
        prefix={<Search />}
        ref={inputRef}
        type="search"
        value={searchKey}
        onChange={event => handleChange(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;
