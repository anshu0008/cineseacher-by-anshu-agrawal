import axios from "axios";

const showDetails = id => axios.get("/", { id });

const fetchList = params => axios.get("/", { params });

const moviesApi = { showDetails, fetchList };

export default moviesApi;
