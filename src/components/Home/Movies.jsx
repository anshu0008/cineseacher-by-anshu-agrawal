import React from "react";

import MovieCart from "./MovieCart";

// eslint-disable-next-line react/jsx-filename-extension
const Movies = ({ data }) => (
  <div className="max-h-80vh mt-6 grid grid-cols-1 gap-4 overflow-y-auto p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {data?.length > 0 &&
      data?.map(movie => (
        <MovieCart
          key={movie.imdbID}
          {...movie}
          // handleDetails={handleDetails}
        />
      ))}
  </div>
);

export default Movies;
