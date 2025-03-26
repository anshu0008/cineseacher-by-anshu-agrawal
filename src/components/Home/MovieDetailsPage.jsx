import React from "react";

import { Modal, Typography } from "neetoui";

const MovieDetails = ({
  handleModal,
  movieDetails: {
    Poster = " ",
    Title = " ",
    Genre = " ",
    Plot,
    imdbRating,
    Director,
    Actors,
    BoxOffice,
    Year,
    Runtime,
    Language,
  },
}) => {
  const genre = Genre?.split(",") || [];

  return (
    <Modal isOpen size="large" onClose={handleModal}>
      <Modal.Header
        description={
          <span className="mt-2 flex flex-wrap gap-2">
            {genre.map(item => (
              <span
                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
                key={item}
              >
                {item}
              </span>
            ))}
          </span>
        }
      >
        <Typography style="h2">{Title}</Typography>
      </Modal.Header>
      <Modal.Body className="space-y-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Poster Image */}
          <div className="col-span-4 flex justify-center">
            <img
              alt={Title}
              className="w-full max-w-xs rounded-lg shadow-md"
              src={Poster}
            />
          </div>
          {/* Movie Details */}

          <div className="col-span-8">
            <Typography className="italic text-gray-600">{Plot}</Typography>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <strong className="text-gray-800">Director:</strong> {Director}
              </li>
              <li>
                <strong className="text-gray-800">Actors:</strong> {Actors}
              </li>
              <li>
                <strong className="text-gray-800">Box Office:</strong>{" "}
                {BoxOffice}
              </li>
              <li>
                <strong className="text-gray-800">Year:</strong> {Year}
              </li>
              <li>
                <strong className="text-gray-800">Runtime:</strong> {Runtime}
              </li>
              <li>
                <strong className="text-gray-800">Language:</strong> {Language}
              </li>
              <li>
                <strong className="text-gray-800">Rated:</strong> {imdbRating}
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MovieDetails;
