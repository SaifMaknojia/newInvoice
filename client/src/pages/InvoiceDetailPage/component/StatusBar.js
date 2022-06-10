import axios from "axios";
import React, { useContext } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { StatusStyle, handleModal } from "../../../components/Utils";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import DeleteModal from "./DeleteModal";

const StatusBar = () => {
  const {
    singleInvoice,
    setShowDeleteModal,
    showDeleteModal,
    showOffCanvas,
    setIsEditing,
    setShowOffCanvas,
    setValue,
    allInvoices,
    setAllInvoices,
    update
  } = useContext(INVOICE_CONTEXT);

  const params = useParams();

  const handleSetValues = () => {
    singleInvoice.items.map((invoice, i) => {
      return update(i, {
        name: invoice.name,
        quantity: invoice.quantity,
        price: invoice.price
      });
    });
    setValue("clientEmail", singleInvoice.clientEmail);
    setValue("clientName", singleInvoice.clientName);
    setValue("description", singleInvoice.description);
    setValue("paymentTerms", singleInvoice.paymentTerms);
    setValue("createdAt", singleInvoice.createdAt);
    setValue("clientAddress.city", singleInvoice.clientAddress.city);
    setValue("clientAddress.street", singleInvoice.clientAddress.street);
    setValue("clientAddress.postCode", singleInvoice.clientAddress.postCode);
    setValue("clientAddress.country", singleInvoice.clientAddress.country);
    setValue("status", singleInvoice.status);
    setValue("invoiceNumber", singleInvoice.invoiceNumber);
  };

  const handleEditInvoice = () => {
    setIsEditing(true);
    setShowOffCanvas(!showOffCanvas);
    handleSetValues();
  };

  const handleMarkAsPaid = () => {
    const allInvoicesCopy = [...allInvoices];
    const currentInvoice = allInvoicesCopy.find(
      (invoice) => invoice._id === params.id
    );
    currentInvoice.status = "paid";
    axios
      .patch(`http://127.0.0.1:8000/api/v1/invoices/${params.id}`, {
        ...currentInvoice
      })
      .then((data) => {
        setAllInvoices(
          allInvoicesCopy.map((invoice) => {
            if (invoice._id === params.id) {
              return {
                ...invoice,
                currentInvoice
              };
            }
            return invoice;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card
      style={{ height: "77px" }}
      className="d-flex flex-row rounded justify-content-between align-items-center"
    >
      <Card.Body className="d-flex rounded justify-content-between align-items-center justify-content-md-start px-4">
        <p className="me-3 mb-0 blue-dark">Status</p>
        <p
          style={StatusStyle(singleInvoice.status)}
          className="mb-0 header-main text-capitalize"
        >
          {singleInvoice.status}
        </p>
      </Card.Body>
      <ButtonGroup className="d-none d-md-block">
        <Button
          onClick={handleEditInvoice}
          className="mx-1 button-edit rounded-pill px-4 py-2"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleModal(showDeleteModal, setShowDeleteModal)}
          className="mx-1 button-delete  rounded-pill px-4 py-2"
        >
          Delete
        </Button>
        <Button
          onClick={handleMarkAsPaid}
          className="mx-1 button-paid  rounded-pill px-4 py-2"
        >
          Mark as Paid
        </Button>
      </ButtonGroup>
      <DeleteModal />
    </Card>
  );
};

export default StatusBar;
