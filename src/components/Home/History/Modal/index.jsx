import React from "react";

import { Button, Typography, Modal } from "neetoui";
import useHistoryItemsStore from "stores/useHistoryItemsStore";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  imdbId = "",
  Title = "",
  clearAll,
  setClearAll,
}) => {
  const { toggleFromCart, clearCart } = useHistoryItemsStore();

  const handleModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    if (clearAll) {
      clearCart();
    } else {
      toggleFromCart(Title, imdbId);
    }
    setClearAll(false);
    handleModal();
  };
  if (isOpen === false) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModal}>
      <Modal.Header>
        <Typography id="dialog1Title" style="h2">
          Are you sure you want to delete {!clearAll ? Title : "all movies"}?
        </Typography>
      </Modal.Header>
      <Modal.Footer className="space-x-2">
        <Button label="Cancel" style="tertiary" onClick={handleModal} />
        <Button label="Delete" style="danger" onClick={handleDelete} />
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteModal;
