import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import { Input, Checkbox } from "neetoui";
import { useTranslation } from "react-i18next";

import filterValidation from "./utils";

const FilterDialog = ({ isOpen, onClose, updateQueryParams }) => {
  const [yearState, setYearState] = useState(null);

  const [errorMessage, setErrorMessage] = useState(true);

  const [filters, setFilters] = useState({ movie: true, series: true });

  const { t } = useTranslation();

  const currentYear = dayjs().year();

  const handleCheckboxChange = type => {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }));
  };

  useEffect(() => {
    filterValidation({
      yearState,
      updateQueryParams,
      filters,
      currentYear,
    });
    if (yearState > 1950 && yearState <= currentYear) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  }, [yearState, filters]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute right-0 top-10 z-20">
      <div className="w-64 rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700">
            {t("label.filter")}
          </span>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="mt-2">
          <label className="text-gray-700">{t("label.year")}</label>
          <Input
            placeholder={t("inputPlaceholder.year")}
            type="number"
            onChange={({ target: { value } }) => setYearState(value)}
          />
          {errorMessage && (
            <span className="text-xs text-red-500">
              {t("errorMessage.invalidYear", { value: currentYear })}
            </span>
          )}
        </div>
        <div className="mt-2">
          <label className="text-gray-700">{t("label.type")}</label>
          <div className="mt-2 flex gap-4">
            <Checkbox
              checked={filters.movie}
              label={t("label.movies")}
              onChange={() => handleCheckboxChange("movie")}
            />
            <Checkbox
              checked={filters.series}
              label={t("label.series")}
              onChange={() => handleCheckboxChange("series")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
