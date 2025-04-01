import React from "react";

import SpinnerWrapper from "components/common/SpinnerWrapper";
import { genreSplit } from "components/Home/constant";
import { useShowMovieDetails } from "hooks/reactQuery/useMoviesApi";
import { existsBy } from "neetocist";
import { Rating, RatingFilled } from "neetoicons";
import { Button, Modal, Typography } from "neetoui";
import { Trans, useTranslation } from "react-i18next";
import useFavoriteItemsStore from "stores/useFavoriteItemsStore";

import { otherMovieDetails } from "./utils";

const Details = ({ imdbID, setIsModalVisible, isModalVisible }) => {
  const { data, isLoading } = useShowMovieDetails({ i: imdbID });

  const {
    title,
    poster,
    plot,
    director,
    actors,
    boxOffice,
    year,
    runtime,
    language,
    imdbRating,
    genre,
  } = data || {};

  const { t } = useTranslation();

  const Genre = genreSplit(genre);

  const { toggleFromCart, favoriteCart } = useFavoriteItemsStore.pick();

  const isFavorite = existsBy({ imdbID }, favoriteCart);

  const handleCartClick = () => {
    toggleFromCart(title, imdbRating, imdbID);
  };

  const OTHER_MOVIE_DETAILS = otherMovieDetails(t, {
    director,
    actors,
    boxOffice,
    year,
    runtime,
    language,
    imdbRating,
  });

  return (
    <Modal
      isOpen={isModalVisible}
      size="large"
      onClose={() => setIsModalVisible(false)}
    >
      {isLoading ? (
        <SpinnerWrapper />
      ) : (
        <>
          <Modal.Header
            description={
              <span className="mt-2 flex flex-wrap gap-2">
                {Genre.map(item => (
                  <span
                    className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </span>
            }
          >
            <div className="flex w-full items-center justify-start gap-2">
              <Typography style="h2">{title}</Typography>
              <Button
                icon={isFavorite ? RatingFilled : Rating}
                iconSize={30}
                size="large"
                style="icon"
                tooltipProps={{
                  content: isFavorite
                    ? t("favorite.removeFromFavorite")
                    : t("favorite.addToFavorite"),
                  position: "right",
                }}
                onClick={handleCartClick}
              />
            </div>
          </Modal.Header>
          <Modal.Body className="space-y-4">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-4 flex justify-center">
                <img
                  alt={title}
                  className="w-full max-w-xs rounded-lg shadow-md"
                  src={poster}
                />
              </div>
              <div className="col-span-8">
                <Typography className="italic text-gray-600">{plot}</Typography>
                <ul className="mt-4 space-y-2 text-sm">
                  {Object.entries(OTHER_MOVIE_DETAILS).map(([text, value]) => (
                    <li className="flex gap-1" key={text}>
                      <Trans
                        i18nKey="movie.movieData"
                        values={{ text }}
                        components={{
                          typography: <strong className="text-gray-800" />,
                        }}
                      />
                      <Trans
                        i18nKey="movie.movieValue"
                        values={{ value }}
                        components={{
                          typography: <p className="text-gray-800" />,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default Details;
