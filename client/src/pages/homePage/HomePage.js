import React, { useContext, useEffect } from "react";
import "./homepage.css";
import HomePageCard from "./components/HomePageCard";
import { INVOICE_CONTEXT } from "../../contextApi/InvoiceContext";
import EmptyHomePage from "./EmptyHomePage";
import Navbar from "./components/Navbar";
import axios from "axios";

const HomePage = () => {
  const { allInvoices, setAllInvoices, filterAllInvoices, isEditing } =
    useContext(INVOICE_CONTEXT);

  useEffect(() => {
    axios
      .get("https://invoice-app-server.onrender.com/api/v1/invoices")
      .then((data) => setAllInvoices(data.data.invoices))
      .catch((err) => console.log(err));
  }, [setAllInvoices]);

  const newInvoices =
    filterAllInvoices.length >= 1 ? filterAllInvoices : allInvoices;

  return (
    <div className="mb-5">
      <Navbar newInvoices={newInvoices} />
      {newInvoices.length >= 1 ? (
        <HomePageCard newInvoices={newInvoices} />
      ) : (
        <EmptyHomePage />
      )}
    </div>
  );
};

export default HomePage;
