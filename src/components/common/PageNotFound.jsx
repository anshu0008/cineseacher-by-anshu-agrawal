import { NoData } from "neetoui";
import { useTranslation } from "react-i18next";
import withT from "utils/withT";

import { route } from "../../route";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-1/3 top-1/3">
      <NoData
        title={t("pageNotFound.title")}
        primaryButtonProps={{
          label: t("pageNotFound.label"),
          className: "bg-neutral-800 hover:bg-neutral-950",
          to: `${route.movies.index}`,
        }}
      />
    </div>
  );
};
export default withT(PageNotFound);
