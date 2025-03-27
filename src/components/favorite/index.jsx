import React from "react";

import useFaovoriteItemsStore from "stores/useFaovoriteItemsStore";

const FavoritePage = () => {
  const { favoriteCart } = useFaovoriteItemsStore();

  console.log("favoriteCart", favoriteCart);

  return <div className="mt-10 flex items-center justify-center" />;
};

export default FavoritePage;
