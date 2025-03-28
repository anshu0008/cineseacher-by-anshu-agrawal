import React, { useRef, useState } from "react";

import { useSearchOnFocus } from "hooks/searchOnFocus";
import { Filter, Search } from "neetoicons";
import { Input } from "neetoui";

import FilterDialog from "./FilterDialog";

const SearchBar = ({ searchTerm, updateQueryParams, year }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchKey, setSearchKey] = useState(searchTerm || "");

  const inputRef = useRef(null);
  useSearchOnFocus({ inputRef });

  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <Input
        className="w-full border-gray-300"
        placeholder="Search Pictures"
        prefix={<Search />}
        ref={inputRef}
        type="search"
        value={searchKey}
        onChange={({ target: { value } }) => {
          updateQueryParams({ searchTerm: value });
          setSearchKey(value);
        }}
      />
      <div className="relative z-10 flex flex-col items-start justify-end">
        <Filter
          className="cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <FilterDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          {...{
            year,
            updateQueryParams,
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
