import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import LargeScreenInvoiceTotal from "./LargeScreenInvoiceTotal";
import ProductItem from "./ProductItem";

const InvoiceTotal = () => {
  const { singleInvoice } = useContext(INVOICE_CONTEXT);
  return (
    <>
      {/*   show on small */}
      <div className="mb-5 pt-3 d-sm-none primary-light-background border-radius">
        <ProductItem />
        <div className="d-flex justify-content-between align-items-center primary-dark-background rounded mt-4">
          <Container className="d-flex justify-content-between align-items-center p-4">
            <p className="text-white mb-0">Grand Total</p>
            <p className="text-white mb-0">${singleInvoice.total.toFixed(2)}</p>
          </Container>
        </div>
      </div>
      <LargeScreenInvoiceTotal />
    </>
  );
};

export default InvoiceTotal;
