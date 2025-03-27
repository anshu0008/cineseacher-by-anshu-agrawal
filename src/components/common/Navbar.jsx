import React from "react";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <div className="flex h-16 w-full items-end justify-start gap-10 border-b border-gray-200 pb-2 pl-4">
      <div className="flex gap-2 text-2xl font-bold">
        <span className="text-blue-600">Cine</span>
        <span className="text-black">Searcher</span>
      </div>
      <div className="mb-1 flex gap-6 font-semibold">
        <Link
          className={location === "/movies" ? "text-blue-600" : "text-gray-600"}
          to="/"
        >
          Home
        </Link>
        <Link
          to="/movies/favorite"
          className={
            location === "/movies/favorite" ? "text-blue-600" : "text-gray-600"
          }
        >
          Favourites
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
