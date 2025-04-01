import { FILTER_YEAR_VALIDATION_SCHEMA } from "../constant";

const filterValidation = ({ yearState, updateQueryParams, filters }) => {
  const updates = {};

  // Validate year
  const yearValidation = async () => {
    if (!yearState) {
      updates.year = null;

      return;
    }
    try {
      await FILTER_YEAR_VALIDATION_SCHEMA().validate(yearState);
      updates.year = yearState;
    } catch (error) {
      updates.year = null;
      console.error("Year validation error:", error);
    }
  };

  // Validate type
  if (filters.movie && !filters.series) {
    updates.type = "movie";
  } else if (filters.series && !filters.movie) {
    updates.type = "series";
  } else if (
    (filters.series && filters.movie) ||
    (!filters.series && !filters.movie)
  ) {
    updates.type = null;
  }
  yearValidation();
  updateQueryParams(updates);
};

export default filterValidation;
