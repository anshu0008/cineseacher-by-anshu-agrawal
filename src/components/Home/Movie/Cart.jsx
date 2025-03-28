import React, { useState } from "react";

import { Button } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

import Details from "./Details";
import { fallbackImage } from "./utils";

const MovieCart = ({ Title, Year, Poster, imdbID, Type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const poster = fallbackImage(Poster);
  const { pushToCart } = useHistoryItemsStore();

  const handleClick = () => {
    setIsModalVisible(true);
    pushToCart(Title, imdbID);
  };

  return (
    <div
      className="flex h-auto w-48 flex-col justify-evenly gap-2 rounded-lg border border-gray-200 bg-white shadow-md"
      key={imdbID}
    >
      <div className="flex items-start justify-center">
        <img alt="movie" className="h-32 w-auto" src={poster} />
      </div>
      <div className="flex flex-col items-start gap-1 px-4 py-1">
        <h2 className="text-base font-bold">{Title}</h2>
        <p className="text-xs text-gray-400">
          {Type[0].toUpperCase() + Type.slice(1)} . {Year}
        </p>
        <Button
          className="mb-2 rounded bg-gray-100 text-blue-600"
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
