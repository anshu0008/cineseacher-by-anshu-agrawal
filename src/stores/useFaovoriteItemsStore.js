import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteItemsStore = create(
  persist(
    set => ({
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
    }),
    { favorite: "favoriteCart" }
  )
);

export default useFavoriteItemsStore;
