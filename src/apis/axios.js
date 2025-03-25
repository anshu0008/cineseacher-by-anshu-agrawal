import { keysToCamelCase } from "@bigbinary/neeto-cist";
import axios from "axios";
import { t } from "i18next";
import { Toastr } from "neetoui";

const shouldShowToastr = response =>
  typeof response === "object" && response?.noticeCode;

const showSuccessToastr = response => {
  if (shouldShowToastr(response.data)) Toastr.success(response.data);
};

const showErrorToastr = error => {
  if (error.message === t("error.networkError")) {
    Toastr.error(t("error.noInternetConnection"));
  } else if (error.response?.status !== 404) {
    Toastr.error(error);
  }
};

const transformResponseKeysToCamelCase = response => {
  if (response.data) response.data = keysToCamelCase(response.data);
};

const responseInterceptors = () => {
  axios.interceptors.response.use(
    response => {
      transformResponseKeysToCamelCase(response);
      showSuccessToastr(response);

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
