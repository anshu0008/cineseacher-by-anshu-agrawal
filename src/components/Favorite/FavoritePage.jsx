import React from "react";

import { ShowEmptyData } from "components/common";
import { isEmpty } from "ramda";
import { Trans, useTranslation } from "react-i18next";
import useFaovoriteItemsStore from "stores/useFaovoriteItemsStore";

const FavoritePage = () => {
  const { t } = useTranslation();

  const { favoriteCart } = useFaovoriteItemsStore();

  if (isEmpty(favoriteCart)) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <ShowEmptyData description={t("title.emptyFavoriteStore")} />
      </div>
    );
  }

  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-start gap-5 overflow-y-auto">
      <div className="mt-10 flex w-full flex-col items-center justify-start gap-5">
        {favoriteCart.map(({ Title, Ratings }, index) => (
          <div
            className="flex w-1/2 items-center justify-between rounded-lg border-2 border-gray-300 p-4 shadow-md"
            key={index}
          >
            <h2 className="text-xl font-semibold">{Title}</h2>
            <span className="ml-2 text-sm font-medium text-gray-300">
              <Trans
                i18nKey="favorite.rating"
                values={{ value: Ratings }}
                components={{
                  span: <span className="text-sm text-gray-500" />,
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
