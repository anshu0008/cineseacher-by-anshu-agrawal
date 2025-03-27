import React from "react";

import { ShowEmptyData } from "components/common";
import useFaovoriteItemsStore from "stores/useFaovoriteItemsStore";

const FavoritePage = () => {
  const { favoriteCart } = useFaovoriteItemsStore();

  return (
    <>
      {favoriteCart?.length > 0 ? (
        <div className="flex h-5/6 w-full flex-col items-center justify-start gap-5 overflow-y-auto">
          <div className="mt-10 flex w-full flex-col items-center justify-start gap-5">
            {favoriteCart.map((item, index) => (
              <div
                className="flex w-1/2 items-center justify-between rounded-lg border-2 border-gray-300 p-4 shadow-md"
                key={index}
              >
                <h2 className="text-xl font-semibold">{item.Title}</h2>
                <span className="ml-2 text-sm font-medium text-gray-300">
                  Rating: {item.Ratings}/10
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <ShowEmptyData description="No Favorite Movies" />
        </div>
      )}
    </>
  );
};

export default FavoritePage;
