import dayjs from "dayjs";
import { t } from "i18next";
import * as yup from "yup";

export const DEFAULT_PAGE_SIZE = 10;

export const DEFAULT_PAGE_INDEX = 1;

export const genreSplit = Genre => Genre?.split(",") || [];

export const FILTER_YEAR_VALIDATION_SCHEMA = () => {
  const currentYear = dayjs().year();

  return yup
    .number()
    .min(1950, t("errorMessage.invalidYear", { value: currentYear }))
    .max(currentYear, t("errorMessage.invalidYear", { value: currentYear }));
};
