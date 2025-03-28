import * as R from "ramda";

export const fallbackImage = Poster => {
  if (Poster === "N/A") {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1QPzpt3U-jYLjNDy69hSRmg-MNcqGWkDkQ&s";
  }

  return Poster;
};

export const isEmptyOrUndefined = R.either(R.isEmpty, R.isNil);
