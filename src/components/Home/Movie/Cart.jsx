import React, { useState } from "react";

import { Button } from "neetoui";
import { useTranslation } from "react-i18next";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

import Details from "./Details";
import { fallbackImage, movieYear } from "./utils";

const MovieCart = ({ title, year, poster, imdbID, type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { t } = useTranslation();

  const Poster = fallbackImage(poster);
  const { pushToCart } = useHistoryItemsStore();

  const handleClick = () => {
    setIsModalVisible(true);
    pushToCart(title, imdbID);
  };

  return (
    <div
      className="flex h-auto w-48 flex-col justify-evenly gap-2 rounded-lg border border-gray-200 bg-white shadow-md"
      key={imdbID}
    >
      <div className="flex items-start justify-center">
        <img alt={t("label.img")} className="h-32 w-auto" src={Poster} />
      </div>
      <div className="flex flex-col items-start gap-1 px-4 py-1">
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-xs text-gray-400">{movieYear(type, year)}</p>
        <Button
          className="mb-2 rounded bg-gray-100 text-blue-600"
          style="text"
          onClick={handleClick}
        >
          {t("movie.movieButtonLabel")}
        </Button>
      </div>
      <Details {...{ isModalVisible, imdbID, setIsModalVisible }} />
    </div>
  );
};

export default MovieCart;
