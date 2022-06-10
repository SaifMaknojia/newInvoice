import axios from "axios";
import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { handleModal } from "../../../components/Utils";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const DeleteModal = () => {
  const {
    setShowDeleteModal,
    showDeleteModal,
    singleInvoice,
    allInvoices,
    setAllInvoices
  } = useContext(INVOICE_CONTEXT);

  //delete the invoice
  const handleDelete = (invoiceID) => {
    const updatedArray = allInvoices.filter(
      (newData) => newData._id !== invoiceID
    );
    axios
      .delete(`http://127.0.0.1:8000/api/v1/invoices/${invoiceID}`)
      .then(() => setAllInvoices(updatedArray));
    //close the modal
    handleModal(showDeleteModal, setShowDeleteModal);
    //go to homepage
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        onHide={() => handleModal(showDeleteModal, setShowDeleteModal)}
        animation={false}
        centered
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="blue-dark">
          Are you sure you want to delete the #
          <span className="black header-main">
            {singleInvoice.invoiceNumber}
          </span>
          ?.This action can't be undone
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            className="button-edit rounded-pill px-4 py-2"
            onClick={() => handleModal(showDeleteModal, setShowDeleteModal)}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            href="/"
            onClick={() => handleDelete(singleInvoice._id)}
            className="button-delete rounded-pill px-4 py-2"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
