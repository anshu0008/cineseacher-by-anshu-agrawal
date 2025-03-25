import moviesApi from "apis/movies";
import { useQuery } from "react-query";

import { QUERY_KEYS } from "./constant";

export const useMovieFetch = params =>
  useQuery({
    queryKey: [QUERY_KEYS.MOVIES, params],
    queryFn: () => moviesApi.fetchList(params),
    enabled: !!params.s,
  });

export const useShowProduct = slug =>
  useQuery(
    {
      queryKey: [QUERY_KEYS.MOVIES, slug],
      queryFn: () => moviesApi.show(slug),
    },
    { enabled: !!slug }
  );
