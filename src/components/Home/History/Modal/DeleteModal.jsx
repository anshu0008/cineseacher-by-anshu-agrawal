import React from "react";

import { Button, Typography, Modal } from "neetoui";
import { useTranslation } from "react-i18next";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  imdbId = "",
  clearAll,
  setClearAll,
}) => {
  const { deleteFromCart, clearCart } = useHistoryItemsStore();

  const { t } = useTranslation();

  const handleDeleteModalShow = () => {
    setIsOpen(false);
  };

  const handleHistoryDelete = () => {
    if (clearAll) {
      clearCart();
    } else {
      deleteFromCart(imdbId);
    }
    setClearAll(false);
    handleDeleteModalShow();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleDeleteModalShow}>
      <Modal.Header>
        <Typography id="dialog1Title" style="h2">
          {clearAll ? t("history.clearAllMessage") : t("history.clearMessage")}
        </Typography>
      </Modal.Header>
      <Modal.Footer className="space-x-2">
        <Button
          label={t("history.cancelLabel")}
          style="tertiary"
          onClick={handleDeleteModalShow}
        />
        <Button
          label={t("history.deleteLabel")}
          style="danger"
          onClick={handleHistoryDelete}
        />
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteModal;
