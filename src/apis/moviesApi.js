import axios from "axios";

const showDetails = id => axios.get({ id });

const fetchList = params => axios.get({ params });

const productsApi = { showDetails, fetchList };

export default productsApi;
