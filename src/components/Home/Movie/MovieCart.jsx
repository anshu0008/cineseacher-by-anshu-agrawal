import React, { useState } from "react";

import useHistoryItemsStore from "stores/useHistoryItemsStore";

import MovieDetailsPage from "../MovieDetails/MovieDetailsPage";

const MovieCart = ({ Title, Year, Poster, imdbID }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (Poster === "N/A") {
    Poster =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1QPzpt3U-jYLjNDy69hSRmg-MNcqGWkDkQ&s";
  }

  const { pushToCart } = useHistoryItemsStore();

  const handleClick = () => {
    setIsModalVisible(true);
    pushToCart(Title);
  };

  return (
    <div
      className="flex max-h-72 flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-md"
      key={imdbID}
    >
      <div className="flex items-start justify-center">
        <img alt="movie" className="max-h-32 w-auto" src={Poster} />
      </div>
      <div className="m-3 flex flex-col items-start gap-1">
        <h2 className="text-lg font-bold">{Title}</h2>
        <p className="text-gray-400">Movie . {Year}</p>
        <button
          className="rounded px-4 py-2 text-blue-600 hover:bg-gray-100"
          onClick={handleClick}
        >
          View Details
        </button>
      </div>
      <MovieDetailsPage {...{ isModalVisible, imdbID, setIsModalVisible }} />
    </div>
  );
};

export default MovieCart;
