import React, { useContext, useEffect } from "react";
import { INVOICE_CONTEXT } from "../../contextApi/InvoiceContext";
import { useParams } from "react-router-dom";
import "./invoiceDetailPage.css";
import GoBack from "../../components/GoBack";
import { Container } from "react-bootstrap";
import StatusBar from "./component/StatusBar";
import Content from "./component/Content";
import ButtonBottom from "./component/ButtonBottom";
import axios from "axios";
import DeleteModal from "./component/DeleteModal";
import InvoiceForm from "./../invoiceForm/InvoiceForm";

const InvoiceDetailPage = () => {
  const { setSingleInvoice, singleInvoice, allInvoices } =
    useContext(INVOICE_CONTEXT);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/invoices/${params.id}`)
      .then((invoice) => setSingleInvoice(invoice.data.invoice))
      .catch((err) => console.log(err));
  }, [setSingleInvoice, params.id, allInvoices]);

  return (
    <>
      {singleInvoice && (
        <>
          <Container>
            <InvoiceForm />
            <GoBack />
            <StatusBar />
            <div className="mb-5">
              <Content />
            </div>
            <DeleteModal />
          </Container>
          <ButtonBottom />
        </>
      )}
    </>
  );
};

export default InvoiceDetailPage;
