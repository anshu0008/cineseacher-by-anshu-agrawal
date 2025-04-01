import React from "react";

import { NoData } from "components/common";
import { isEmpty } from "ramda";
import { Trans, useTranslation } from "react-i18next";
import useFavoriteItemsStore from "stores/useFavoriteItemsStore";

const FavoritePage = () => {
  const { t } = useTranslation();

  const { favoriteCart } = useFavoriteItemsStore.pick();

  if (isEmpty(favoriteCart)) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <NoData description={t("title.emptyFavoriteStore")} />
      </div>
    );
  }

  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-start gap-5 overflow-y-auto">
      <div className="mt-10 flex w-full flex-col items-center justify-start gap-5">
        {favoriteCart.map(({ title, ratings, imdbID }) => (
          <div
            className="flex w-1/2 items-center justify-between rounded-lg border-2 border-gray-300 p-4 shadow-md"
            key={imdbID}
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <span className="ml-2 text-sm font-medium text-gray-500">
              <Trans
                i18nKey="favorite.rating"
                values={{ value: ratings }}
                components={{
                  span: <span className="text-sm text-black" />,
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
