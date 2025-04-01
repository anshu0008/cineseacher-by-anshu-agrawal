import { existsBy, findBy, removeBy } from "neetocist";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHistoryItemsStore = create(
  persist(
    set => ({
      historyCart: { data: [], id: 0 },
      pushToCart: (title, imdbId) =>
        set(({ historyCart }) => {
          const itemExists = existsBy({ imdbId }, historyCart.data);

          return {
            historyCart: itemExists
              ? { data: historyCart.data, id: imdbId }
              : {
                  data: [{ title, imdbId }, ...historyCart.data],
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
            id: (() => {
              if (historyCart.id !== imdbId) return historyCart.id;

              const nextValidItem = findBy(
                { imdbId: value => value !== imdbId },
                historyCart.data
              );

              return nextValidItem?.imdbId || 0;
            })(),
          },
        })),
    }),
    { history: "history-cart" }
  )
);

export default useHistoryItemsStore;
