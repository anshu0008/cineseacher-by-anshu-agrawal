import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHistoryItemsStore = create(
  persist(
    set => ({
      historyCart: { data: [], id: 0 },
      pushToCart: (Title, imdbId) =>
        set(({ historyCart }) => {
          const itemExists = historyCart.data.some(
            item => item.imdbId === imdbId
          );
          //apply neetocist

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
        set(({ historyCart }) => {
          const updatedData = historyCart.data.filter(
            item => item.imdbId !== imdbId
          );

          return {
            historyCart: {
              data: updatedData,
              id:
                historyCart.id === imdbId // If deleting the selected item
                  ? updatedData.length > 0 // If list is not empty
                    ? updatedData[updatedData.length - 1].imdbId // Select last item instead of first
                    : 0 // If empty, reset to 0
                  : historyCart.id, // If not deleting the selected item, keep `id` unchanged
            },
          };
        }),
    }),
    { history: "history-cart" }
  )
);

export default useHistoryItemsStore;
