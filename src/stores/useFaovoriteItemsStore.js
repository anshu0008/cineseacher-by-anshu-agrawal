import { existsBy, removeBy } from "neetocist";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteItemsStore = create(
  persist(
    set => ({
      favoriteCart: [],

      toggleFromCart: (title, ratings, imdbID) =>
        set(({ favoriteCart }) => {
          const itemExists = existsBy({ imdbID }, favoriteCart);

          return {
            favoriteCart: itemExists
              ? removeBy({ imdbID }, favoriteCart)
              : [...favoriteCart, { title, ratings, imdbID }],
          };
        }),
    }),
    { favorite: "favoriteCart" }
  )
);

export default useFavoriteItemsStore;
