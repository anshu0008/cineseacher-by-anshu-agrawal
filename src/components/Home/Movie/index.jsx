import React from "react";

import ShowEmptyData from "components/common/ShowEmptyData";

import MovieCart from "./Cart";
import { isEmptyOrUndefined } from "./utils";

const Movies = ({ movies, Response }) => (
  <div className="h-70 overflow-y-auto">
    {isEmptyOrUndefined(movies) ? (
      <ShowEmptyData
        description={
          Response === "False"
            ? "No Movie Found !!!"
            : "Enter any movies or series to search"
        }
      />
    ) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies?.map(movie => (
          <MovieCart key={movie.imdbID} {...movie} />
        ))}
      </div>
    )}
  </div>
);
export default Movies;
