import React from "react";

import { Search } from "neetoicons";
import { Input } from "neetoui";

const SearchBar = ({ searchKey, setSearchKey }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <Input
      className="w-full border-gray-300"
      placeholder="Search Pictures"
      prefix={<Search />}
      type="search"
      value={searchKey}
      onChange={event => setSearchKey(event.target.value)}
    />
  </div>
);
export default SearchBar;
