import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import INVOICECONTEXTPROVIDER from "./contextApi/InvoiceContext";

ReactDOM.render(
  <React.StrictMode>
    <INVOICECONTEXTPROVIDER>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </INVOICECONTEXTPROVIDER>
  </React.StrictMode>,
  document.getElementById("root")
);
