import React, { useEffect, useState } from "react";

import { Input, Checkbox } from "neetoui";

import filterValidation from "./utils";

const FilterDialog = ({ isOpen, onClose, updateQueryParams }) => {
  const [yearState, setYearState] = useState(null);

  const [errorMessage, setErrorMessage] = useState(true);

  const [filters, setFilters] = useState({ movie: true, series: true });

  const handleCheckboxChange = type => {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }));
  };

  useEffect(() => {
    filterValidation({
      yearState,
      updateQueryParams,
      filters,
    });
    if (yearState > 1950 && yearState <= new Date().getFullYear()) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  }, [yearState, filters]);

  return (
    <div className="absolute right-0 top-10 z-20">
      {isOpen && (
        <div className="w-64 rounded-lg border bg-white p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">Filters</span>
            <button
              className="text-gray-500 hover:text-black"
              onClick={onClose}
            >
              ✖
            </button>
          </div>
          <div className="mt-2">
            <label className="text-gray-700">Year</label>
            <Input
              placeholder="YYYY"
              type="number"
              onChange={({ target: { value } }) => setYearState(value)}
            />
            {errorMessage && (
              <span className="text-xs text-red-500">
                *Year should be between 1950 and 2025
              </span>
            )}
          </div>
          <div className="mt-2">
            <label className="text-gray-700">Type</label>
            <div className="mt-2 flex gap-4">
              <Checkbox
                checked={filters.movie}
                label="Movie"
                onChange={() => handleCheckboxChange("movie")}
              />
              <Checkbox
                checked={filters.series}
                label="Series"
                onChange={() => handleCheckboxChange("series")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDialog;
