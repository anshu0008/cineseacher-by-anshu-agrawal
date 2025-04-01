import { either, isEmpty, isNil } from "ramda";

export const fallbackImage = poster => {
  if (poster === "N/A") {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1QPzpt3U-jYLjNDy69hSRmg-MNcqGWkDkQ&s";
  }

  return poster;
};

export const isEmptyOrUndefined = either(isEmpty, isNil);

export const otherMovieDetails = (
  t,
  { director, actors, boxOffice, year, runtime, language, imdbRating }
) => ({
  [t("movieModalData.director")]: director,
  [t("movieModalData.actors")]: actors,
  [t("movieModalData.boxOffice")]: boxOffice,
  [t("movieModalData.year")]: year,
  [t("movieModalData.runtime")]: runtime,
  [t("movieModalData.language")]: language,
  [t("movieModalData.rated")]: imdbRating,
});

export const movieYear = (Type, Year) =>
  `${Type[0].toUpperCase() + Type.slice(1)} ${" • "} ${Year}`;
