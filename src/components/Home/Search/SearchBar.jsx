import React, { useRef } from "react";

import { useSearchOnFocus } from "hooks/searchOnFocus";
import { Search } from "neetoicons";
import { Input } from "neetoui";

// import FilterDialog from "./FilterDialog";

const SearchBar = ({ searchKey, updateQueryParams, setSearchKey }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useRef(null);
  useSearchOnFocus({ inputRef });

  return (
    // <div className="mb-4 flex">
    <div className="mb-8 flex items-center justify-between gap-4">
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
      {/* <div className="relative z-10 flex flex-col items-start justify-end">
        <Filter onClick={() => setIsModalOpen(true)} />
        {isModalOpen && (
          <div className="absolute right-0 top-10 z-20">
            <FilterDialog
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        )}
      </div> */}
    </div>
    // </div>
  );
};
export default SearchBar;
