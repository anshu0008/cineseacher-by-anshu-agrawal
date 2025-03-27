import React, { useState } from "react";

import { Button } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

import Details from "./Details";
import { fallbackImage } from "./utils";

const MovieCart = ({ Title, Year, Poster, imdbID }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const poster = fallbackImage(Poster);
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
        <img alt="movie" className="max-h-32 w-auto" src={poster} />
      </div>
      <div className="m-3 flex flex-col items-start gap-1">
        <h2 className="text-lg font-bold">{Title}</h2>
        <p className="text-gray-400">Movie . {Year}</p>
        <Button
          className="rounded bg-gray-100 px-4 py-2 text-blue-600"
          style="text"
          onClick={handleClick}
        >
          View Details
        </Button>
      </div>
      <Details {...{ isModalVisible, imdbID, setIsModalVisible }} />
    </div>
  );
};

export default MovieCart;
