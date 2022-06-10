import React from "react";
import EmptyLogo from "./../../assets/illustration-empty.svg";

const EmptyHomePage = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <img src={EmptyLogo} alt="No invoice" />
        <h2>There is nothing here</h2>
        <p>create an invoice by clicking the</p>
        <p>new invoice button and get started</p>
      </div>
    </div>
  );
};

export default EmptyHomePage;
