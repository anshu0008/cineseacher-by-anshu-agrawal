import React from "react";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import withT from "utils/withT";

import { routes } from "../../route";

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="flex h-16 w-full items-end justify-start gap-10 border-b border-gray-200 pb-2 pl-4">
      <div className="flex gap-2 text-2xl font-bold">
        <span className="text-blue-600">{t("header.cine")}</span>
        <span className="text-black">{t("header.searcher")}</span>
      </div>
      <div className="mb-1 flex gap-6 font-semibold">
        <NavLink
          to={routes.movies.index}
          className={classNames({
            "text-blue-600": pathname === routes.movies.index,
            "text-gray-600": pathname !== routes.movies.index,
          })}
        >
          {t("header.home")}
        </NavLink>
        <NavLink
          to={routes.movies.favorite}
          className={classNames({
            "text-blue-600": pathname === routes.movies.favorite,
            "relative text-gray-600": pathname !== routes.movies.favorite,
          })}
        >
          {t("header.favorite")}
        </NavLink>
      </div>
    </div>
  );
};
export default withT(Navbar);
