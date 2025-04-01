import { either, isEmpty, isNil } from "ramda";

export const fallbackImage = Poster => {
  if (Poster === "N/A") {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1QPzpt3U-jYLjNDy69hSRmg-MNcqGWkDkQ&s";
  }

  return Poster;
};

export const isEmptyOrUndefined = either(isEmpty, isNil);

export const otherMovieDetails = (
  t,
  { Director, Actors, BoxOffice, Year, Runtime, Language, imdbRating }
) => ({
  [t("movieModalData.director")]: Director,
  [t("movieModalData.actors")]: Actors,
  [t("movieModalData.boxOffice")]: BoxOffice,
  [t("movieModalData.year")]: Year,
  [t("movieModalData.runtime")]: Runtime,
  [t("movieModalData.language")]: Language,
  [t("movieModalData.rated")]: imdbRating,
});

export const movieYear = (Type, Year) =>
  `${Type[0].toUpperCase() + Type.slice(1)} ${" • "} ${Year}`;
