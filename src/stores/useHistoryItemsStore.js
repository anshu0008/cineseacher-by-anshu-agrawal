import { create } from "zustand";

const useHistoryItemsStore = create(set => ({
  historyCart: [],
  toggleFromCart: (Title, imdbId) =>
    set(({ historyCart }) => {
      const itemExists = historyCart.some(item => item.imdbId === imdbId);

      return {
        historyCart: itemExists
          ? historyCart.filter(item => item.imdbId !== imdbId)
          : [...historyCart, { Title, imdbId }],
      };
    }),
  clearCart: () =>
    set(() => ({
      historyCart: [],
    })),
}));

export default useHistoryItemsStore;
