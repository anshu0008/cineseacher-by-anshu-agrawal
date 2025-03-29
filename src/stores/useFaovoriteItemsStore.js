import { create } from "zustand";

const useFavoriteItemsStore = create(set => ({
  favoriteCart: [],

  toggleFromCart: (Title, Ratings, imdbID) =>
    set(({ favoriteCart }) => {
      const itemExists = favoriteCart.some(item => item.imdbID === imdbID);
      //implement using neetocist

      return {
        favoriteCart: itemExists
          ? favoriteCart.filter(item => item.imdbID !== imdbID)
          : [...favoriteCart, { Title, Ratings, imdbID }],
      };
    }),
}));

export default useFavoriteItemsStore;
