import React, { useContext } from "react";
import { Container, Offcanvas } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../contextApi/InvoiceContext";
import { handleNewInvoice } from "./../../components/Utils";
import FormContainer from "./components/FormContainer";

import OffCanvasTitle from "./components/InvoiceFormNav";
import "./invoiceForm.css";

const InvoiceForm = () => {
  const { showOffCanvas, setShowOffCanvas, setIsEditing } =
    useContext(INVOICE_CONTEXT);

  const handleCloseModal = () => {
    handleNewInvoice(showOffCanvas, setShowOffCanvas);
    setIsEditing(false);
  };

  return (
    <Offcanvas
      show={showOffCanvas}
      className="offcanvas-wrapper"
      onHide={handleCloseModal}
    >
      <OffCanvasTitle setShowOffCanvas={setShowOffCanvas} />
      <Container>
        <Offcanvas.Title className="px-3">New Invoice</Offcanvas.Title>
        <FormContainer />
      </Container>
    </Offcanvas>
  );
};

export default InvoiceForm;
