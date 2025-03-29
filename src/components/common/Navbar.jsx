import React from "react";

import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import withT from "utils/withT";

import { route } from "../../route";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  return (
    <div className="flex h-16 w-full items-end justify-start gap-10 border-b border-gray-200 pb-2 pl-4">
      <div className="flex gap-2 text-2xl font-bold">
        <span className="text-blue-600">{t("header.cine")}</span>
        <span className="text-black">{t("header.searcher")}</span>
      </div>
      <div className="mb-1 flex gap-6 font-semibold">
        <Link
          className={location === "/movies" ? "text-blue-600" : "text-gray-600"}
          to={route.movies.index}
        >
          {t("header.home")}
        </Link>
        <Link
          to={route.movies.favorite}
          className={
            location === "/movies/favorite" ? "text-blue-600" : "text-gray-600"
          }
        >
          {t("header.favorite")}
        </Link>
      </div>
    </div>
  );
};
export default withT(Navbar);
