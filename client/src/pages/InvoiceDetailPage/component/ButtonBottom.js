import axios from "axios";
import React, { useContext } from "react";
import { Button, Navbar, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { handleModal } from "../../../components/Utils";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const ButtonBottom = () => {
  const {
    setShowDeleteModal,
    showDeleteModal,
    singleInvoice,
    allInvoices,
    setIsEditing,
    setValue,
    update,
    setAllInvoices,
    showOffCanvas,
    setShowOffCanvas
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
    handleSetValues();
    setShowOffCanvas(!showOffCanvas);
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
    <Navbar>
      <div className="button-group d-flex justify-content-center margin-bottom d-md-none border-radius">
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
          onClick={() => handleMarkAsPaid(singleInvoice)}
          className="mx-1 button-paid  rounded-pill px-4 py-2"
        >
          Mark as Paid
        </Button>
      </div>
      <Modal />
    </Navbar>
  );
};

export default ButtonBottom;
