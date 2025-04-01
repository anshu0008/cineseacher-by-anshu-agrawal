import { useState, useRef, useEffect } from "react";

import classNames from "classnames";
import ShowEmptyData from "components/common/NoData";
import { Delete } from "neetoicons";
import { Button, Typography } from "neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

import DeleteModal from "./DeleteModal";

const HistoryContainer = () => {
  const { t } = useTranslation();
  const { historyCart: { data = [], id } = {} } = useHistoryItemsStore();
  const [isOpen, setIsOpen] = useState(false);
  const [clearAll, setClearAll] = useState(false);
  const [selectedImdbId, setSelectedImdbId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const containerRef = useRef(null);
  const selectedRef = useRef(null);

  const handleClearAll = () => {
    setIsOpen(true);
    setClearAll(true);
  };

  const handleDeleteClick = (imdbId, title) => {
    setClearAll(false);
    setSelectedImdbId(imdbId);
    setSelectedTitle(title);
    setIsOpen(true);
  };

  useEffect(() => {
    if (id && selectedRef.current && containerRef.current) {
      requestAnimationFrame(() => {
        containerRef.current.scrollTo({
          top: selectedRef.current.offsetTop - containerRef.current.offsetTop,
          behavior: "smooth",
        });
      });
    }
  }, [id]);

  return (
    <div className="flex h-full w-full flex-col rounded-lg p-4">
      <div className="mb-8 flex items-center justify-between text-lg font-semibold">
        <Typography style="h3">{t("history.viewHistory")}</Typography>
        <Button
          disabled={isEmpty(data)}
          style="danger-text"
          type="reset"
          onClick={handleClearAll}
        >
          {t("history.clearAll")}
        </Button>
      </div>
      {isEmpty(data) ? (
        <ShowEmptyData description={t("title.emptyViewHistory")} />
      ) : (
        <div
          className="flex flex-col gap-3 overflow-y-auto border p-2"
          ref={containerRef}
        >
          {data.map(({ title, imdbId }) => (
            <div
              key={imdbId}
              ref={imdbId === id ? selectedRef : null}
              className={classNames(
                "flex cursor-pointer items-center justify-between rounded-lg bg-gray-300 p-3 text-sm font-semibold shadow-sm hover:bg-blue-500 hover:text-white",
                {
                  "bg-blue-500 text-white": imdbId === id,
                }
              )}
            >
              {title}
              <Button
                icon={Delete}
                size="large"
                style="icon"
                onClick={() => handleDeleteClick(imdbId, title)}
              />
            </div>
          ))}
        </div>
      )}
      <DeleteModal
        {...{
          clearAll,
          selectedImdbId,
          selectedTitle,
          setClearAll,
          isOpen,
          setIsOpen,
        }}
      />
    </div>
  );
};

export default HistoryContainer;
