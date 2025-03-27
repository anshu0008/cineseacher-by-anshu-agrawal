import React from "react";

import NoMovies from "components/common/ShowEmptyData";

import MovieCart from "./Cart";

const Movies = ({ data }) => (
  <div className="h-70 overflow-y-auto">
    {data?.length === 0 ? (
      <NoMovies title="No movies to show" />
    ) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map(movie => (
          <MovieCart key={movie.imdbID} {...movie} />
        ))}
      </div>
    )}
  </div>
);

export default Movies;
