import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import InvoiceTotal from "./SmallScreenInvoiceTotal";
import { getDate } from "../../../components/Utils";

const Content = () => {
  const { singleInvoice } = useContext(INVOICE_CONTEXT);

  return (
    <Card className="mt-3 pb-md-5 pb-5 border-radius">
      <Container>
        <div className="px-3">
          <div className="d-sm-flex justify-content-between mt-4">
            <div>
              <h3 className="mb-0 header-main text-uppercase">
                #{singleInvoice.invoiceNumber}
              </h3>
              <p className="paragraph-main blue-dark">
                {singleInvoice.description}
              </p>
            </div>
            <div>
              <p className="paragraph-main mb-0 blue-dark">
                {singleInvoice.senderAddress.street}
              </p>
              <p className="paragraph-main mb-0 blue-dark">
                {singleInvoice.senderAddress.city}
              </p>
              <p className="paragraph-main mb-0 blue-dark text-uppercase">
                {singleInvoice.senderAddress.postCode}
              </p>
              <p className="paragraph-main blue-dark">
                {singleInvoice.senderAddress.country}
              </p>
            </div>
          </div>
          <div className="d-sm-flex justify-content-sm-between">
            <div className="d-flex justify-content-between mt-2 width-50">
              <div className="d-flex flex-column justify-content-around mx-md-3">
                <div className="">
                  <p className="mb-0 paragraph-main blue-dark">Invoice Date</p>
                  <h3 className="header-main">
                    {getDate(singleInvoice.createdAt)}
                  </h3>
                </div>
                <div>
                  <h3 className=" paragraph-main mb-0 blue-dark">
                    Payment Date
                  </h3>
                  <h3 className="header-main">
                    {getDate(singleInvoice.paymentDue)}
                  </h3>
                </div>
              </div>
              <div className="mx-md-3 ">
                <h3 className="header-main mb-0">Bill To</h3>
                <h3 className="header-main mb-0">{singleInvoice.clientName}</h3>
                <p className="paragraph-main mb-0 blue-dark text-capitalize">
                  {singleInvoice.clientAddress.street}
                </p>
                <p className="paragraph-main mb-0 blue-dark text-capitalize">
                  {singleInvoice.clientAddress.city}
                </p>
                <p className="paragraph-main mb-0 blue-dark text-uppercase">
                  {singleInvoice.clientAddress.postCode}
                </p>
                <p className="paragraph-main blue-dark">
                  {singleInvoice.clientAddress.country}
                </p>
              </div>
            </div>
            <div className="mt-3 align-self-sm-center">
              <h3 className="paragraph-main mb-0 blue-dark">Sent To</h3>
              <h3 className="header-main">{singleInvoice.clientEmail}</h3>
            </div>
          </div>
          <div className="mb-0">
            <InvoiceTotal />
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default Content;
