import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import FilterDropDown from "./NavBarFilterDropDown";
import NavbarTitle from "./NavbarTitle";
import InvoiceForm from "../../invoiceForm/InvoiceForm";

const Navbar = ({ newInvoices }) => {
  const { showOffCanvas, setShowOffCanvas, setIsEditing } =
    useContext(INVOICE_CONTEXT);

  const handleNewInvoice = () => {
    setShowOffCanvas(!showOffCanvas);
    setIsEditing(false);
  };

  return (
    <Container>
      <nav className="d-flex justify-content-evenly justify-content-md-between align-items-center mt-5">
        <NavbarTitle newInvoices={newInvoices} />
        <div className="d-flex justify-content-between align-items-center">
          <FilterDropDown />
          <Button
            onClick={handleNewInvoice}
            className="rounded-pill button-paid py-2 px-3 me-3"
          >
            <span className="fs-5 d-none d-sm-inline"> + </span>
            New Invoices
          </Button>
        </div>
      </nav>
      <InvoiceForm />
    </Container>
  );
};

export default Navbar;
