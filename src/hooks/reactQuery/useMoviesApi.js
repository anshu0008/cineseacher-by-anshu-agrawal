import moviesApi from "apis/movies";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "./constant";

export const useMovieFetch = params =>
  useQuery({
    queryKey: [QUERY_KEYS.MOVIES, params],
    queryFn: () => moviesApi.fetchList(params),
    enabled: !!params.s,
  });

export const useMovieDetails = id =>
  useQuery({
    queryKey: [QUERY_KEYS.MOVIES_DETAILS, id],
    queryFn: () => moviesApi.showDetails(id),
    enabled: !!id,
  });
