import axios from "axios";

import { BASE_URL } from "./constant";

const showDetails = params => axios.get(BASE_URL, { params });

const fetchList = params => axios.get(BASE_URL, { params });

const moviesApi = { showDetails, fetchList };

export default moviesApi;
