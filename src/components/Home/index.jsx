import React, { useEffect, useState } from "react";

import axios from "axios";
import { useMovieFetch } from "hooks/reactQuery/useMoviesApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import { isEmpty } from "ramda";

import HistoryContainer from "./HistoryContainer";
import MovieDetailsPage from "./MovieDetailsPage";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const debouncedSearchKey = useFuncDebounce(searchKey);
  const { data: { Search } = {} } = useMovieFetch({ s: debouncedSearchKey });

  const fetchDetails = async id => {
    try {
      const response = await axios.get(process.env.REACT_APP_OMDB_API_URL, {
        params: {
          i: id,
          apikey: process.env.REACT_APP_API_KEY,
        },
      });
      console.log("response", response);
      if (response && response.Title) {
        setMovieDetails(response);
      } else {
        setMovieDetails({});
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setMovieDetails({});
    }
  };

  const handleModal = id => {
    if (modalVisible) {
      setModalVisible(false);
      setMovieDetails({});
    } else {
      setModalVisible(true);
      if (id) fetchDetails(id);
    }
  };

  useEffect(() => {
    setData(Search || []);
  }, [Search]);

  return (
    <div className="flex h-screen overflow-hidden p-4">
      <div className="flex w-3/4 flex-col">
        <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
        <Movies data={data} handleModal={handleModal} />
        {modalVisible && !isEmpty(movieDetails) && (
          <MovieDetailsPage
            handleModal={handleModal}
            movieDetails={movieDetails}
          />
        )}
      </div>
      <div className="ml-10 flex h-full w-1/4 flex-col overflow-hidden border-l-2 border-gray-300 p-4">
        <div className="flex-1 overflow-y-auto">
          <HistoryContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
