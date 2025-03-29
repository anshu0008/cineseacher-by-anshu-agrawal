import React from "react";

import { Button, Typography, Modal } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  imdbId = "",
  clearAll,
  setClearAll,
}) => {
  const { deleteFromCart, clearCart } = useHistoryItemsStore();

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
          Are you sure you want to delete{" "}
          {clearAll ? "all the movies " : "the movie"} ?
        </Typography>
      </Modal.Header>
      <Modal.Footer className="space-x-2">
        <Button
          label="Cancel"
          style="tertiary"
          onClick={handleDeleteModalShow}
        />
        <Button label="Delete" style="danger" onClick={handleHistoryDelete} />
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteModal;
