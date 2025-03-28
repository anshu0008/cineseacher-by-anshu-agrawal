import { isEmpty } from "ramda";

const filterValidation = ({ yearState, updateQueryParams, filters }) => {
  const currentYear = new Date().getFullYear();
  const updates = {};

  if (yearState > 1950 && yearState <= currentYear) {
    updates.year = yearState;
  } else if (isEmpty(yearState)) {
    updates.year = null;
  }

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
  updateQueryParams(updates);
};

export default filterValidation;
