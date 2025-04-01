import React from "react";

import NoData from "components/common/NoData";
import { useTranslation } from "react-i18next";

import MovieCart from "./Cart";
import { isEmptyOrUndefined } from "./utils";

const Movies = ({ movies, response }) => {
  const { t } = useTranslation();
  if (isEmptyOrUndefined(movies)) {
    return (
      <NoData
        description={
          response === "False"
            ? t("title.movieNotFound")
            : t("title.emptySearchKey")
        }
      />
    );
  }

  return (
    <div className="h-70 overflow-y-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies?.map(movie => (
          <MovieCart key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default Movies;
