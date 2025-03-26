import React from "react";

import NoMovies from "src/common/NoMovies";

import MovieCart from "./MovieCart";

const Movies = ({ data }) => (
  <div className="mt-6 h-5/6 overflow-y-auto p-4">
    {data?.length === 0 ? (
      <NoMovies title="No movies found" />
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
