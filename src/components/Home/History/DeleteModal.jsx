import React from "react";

import { Alert } from "neetoui";
import { useTranslation } from "react-i18next";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  selectedImdbId = "",
  selectedTitle = "",
  clearAll,
  setClearAll,
}) => {
  const { deleteFromCart, clearCart } = useHistoryItemsStore.pick();

  const { t } = useTranslation();

  const handleDeleteModalShow = () => {
    setIsOpen(false);
  };

  const handleHistoryDelete = () => {
    if (clearAll) {
      clearCart();
    } else {
      deleteFromCart(selectedImdbId);
    }
    setClearAll(false);
    handleDeleteModalShow();
  };

  return (
    <Alert
      isOpen={isOpen}
      submitButtonLabel={t("history.deleteLabel")}
      message={
        clearAll ? t("history.clearAllMessage") : t("history.clearMessage")
      }
      title={
        clearAll
          ? t("history.clearAllTitle")
          : t("history.clearTitle", { value: selectedTitle })
      }
      onClose={handleDeleteModalShow}
      onSubmit={handleHistoryDelete}
    />
  );
};
export default DeleteModal;
