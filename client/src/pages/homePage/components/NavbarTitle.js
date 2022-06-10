import React from "react";

const NavbarTitle = ({ newInvoices }) => {
  return (
    <div>
      <div className="d-flex flex-column ">
        <h2 className="mb-0">Invoices</h2>
        <p className="d-flex justify-content-center align-items-center">
          <span className="d-none d-md-flex">There are </span>&nbsp;
          {newInvoices?.length}
          <span className="d-none d-md-flex">&nbsp;Total </span>&nbsp;Invoices
        </p>
      </div>
    </div>
  );
};

export default NavbarTitle;
