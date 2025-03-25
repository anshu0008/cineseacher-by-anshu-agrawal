import axios from "axios";

const showDetails = id => axios.get("/", { i: id });

const fetchList = params => {
  console.log("params", params);

  return axios.get("/", { params });
};
const moviesApi = { showDetails, fetchList };

export default moviesApi;
