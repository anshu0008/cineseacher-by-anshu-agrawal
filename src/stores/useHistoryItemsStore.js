import { existsBy, removeBy } from "neetocist";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHistoryItemsStore = create(
  persist(
    set => ({
      historyCart: { data: [], id: 0 },
      pushToCart: (Title, imdbId) =>
        set(({ historyCart }) => {
          const itemExists = existsBy({ imdbId }, historyCart.data);

          return {
            historyCart: itemExists
              ? { data: historyCart.data, id: imdbId }
              : {
                  data: [{ Title, imdbId }, ...historyCart.data],
                  id: imdbId,
                },
          };
        }),

      clearCart: () =>
        set(() => ({
          historyCart: { data: [], id: 0 },
        })),

      deleteFromCart: imdbId =>
        set(({ historyCart }) => ({
          historyCart: {
            data: removeBy({ imdbId }, historyCart.data),
            id:
              historyCart.id === imdbId
                ? historyCart.data[0].imdbId
                : historyCart.id,
          },
        })),
    }),
    { history: "history-cart" }
  )
);

export default useHistoryItemsStore;
