import { keysToCamelCase } from "@bigbinary/neeto-cist";
import axios from "axios";
import { t } from "i18next";
import { Toastr } from "neetoui";
import { Bounce } from "react-toastify";

const checkForSuccess = response => {
  if (response.data.Response === "False") {
    return Toastr.error(response.data.Error, {
      autoClose: 200,
      transition: Bounce,
    });
  }

  return null;
};

const showErrorToastr = error => {
  if (error.message === t("error.networkError")) {
    Toastr.error(t("error.noInternetConnection"));
  } else if (error.response?.status !== 404) {
    Toastr.error(error, { autoClose: 200, transition: Bounce });
  }
};

const transformResponseKeysToCamelCase = response => {
  if (response.data) response.data = keysToCamelCase(response.data);
};

const responseInterceptors = () => {
  axios.interceptors.response.use(
    response => {
      transformResponseKeysToCamelCase(response);
      checkForSuccess(response);

      return response.data;
    },
    error => {
      showErrorToastr(error);

      return Promise.reject(error);
    }
  );
};

export default function initializeAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_OMDB_API_URL;
  axios.defaults.params = {};
  axios.defaults.params["apikey"] = process.env.REACT_APP_API_KEY;
  responseInterceptors();
}
