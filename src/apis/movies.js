import axios from "axios";

const showDetails = params => axios.get("/", { params });

const fetchList = params => axios.get("/", { params });

const moviesApi = { showDetails, fetchList };

export default moviesApi;
