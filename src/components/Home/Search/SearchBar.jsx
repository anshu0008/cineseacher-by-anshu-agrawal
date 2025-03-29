import React, { useRef, useState } from "react";

import { useSearchOnFocus } from "hooks/searchOnFocus";
import { Filter, Search } from "neetoicons";
import { Input } from "neetoui";
import { useTranslation } from "react-i18next";

import FilterDialog from "./FilterDialog";

const SearchBar = ({ searchTerm, updateQueryParams }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchKey, setSearchKey] = useState(searchTerm || "");

  const { t } = useTranslation();

  const inputRef = useRef(null);
  useSearchOnFocus({ inputRef });

  const handleChange = value => {
    updateQueryParams({ searchTerm: value });
    setSearchKey(value);
  };

  return (
    <div className="mb-8 flex items-center justify-between gap-4">
      <Input
        className="w-full border-gray-300"
        placeholder={t("inputPlaceholder.search")}
        prefix={<Search />}
        ref={inputRef}
        type="search"
        value={searchKey}
        onChange={({ target: { value } }) => {
          handleChange(value);
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
            updateQueryParams,
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
