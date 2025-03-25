import React from "react";

import { Search } from "neetoicons";
import { Input } from "neetoui";

const SearchBar = () => (
  // const [searchKey, setSearchKey] = useState("");

  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <Input
      className="w-full border-gray-300"
      placeholder="Search Pictures"
      prefix={<Search />}
      type="search"
      // value={searchKey}
      // onChange={event => handleChange(event.target.value)}
    />
  </div>
);
export default SearchBar;
