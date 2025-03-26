import { create } from "zustand";

const useHistoryItemsStore = create(set => ({
  historyCart: [],
  toggleIsInCart: Title =>
    set(({ historyCart }) => {
      if (historyCart.includes(Title)) {
        return {};
      }

      return { historyCart: [Title, ...historyCart] };
    }),
}));

export default useHistoryItemsStore;
