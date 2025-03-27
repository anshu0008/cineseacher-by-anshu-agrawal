import React, { useState } from "react";

import { Input, Checkbox, Toastr } from "neetoui";

const FilterDialog = ({ isOpen, onClose }) => {
  const [year, setYear] = useState(2024);
  const [filters, setFilters] = useState({ movie: true, series: false });

  const handleCheckboxChange = type => {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }));
  };
  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    Toastr.error("Year should be less than or equal to current year");
  }

  return (
    isOpen && (
      <div className="w-64 rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700">Filters</span>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="mt-2">
          <label className="text-gray-700">Year</label>
          <Input
            type="number"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
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
    )
  );
};

export default FilterDialog;
