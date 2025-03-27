import { without } from "ramda";
import { create } from "zustand";

const useFaovoriteItemsStore = create(set => ({
  favoriteCart: [],
  pushToCart: Title =>
    set(({ favoriteCart }) => {
      if (favoriteCart.includes(Title)) {
        return { favoriteCart: without([Title], favoriteCart) };
      }

      return { favoriteCart: [Title, ...favoriteCart] };
    }),
}));

export default useFaovoriteItemsStore;
