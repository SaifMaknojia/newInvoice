import React, { useContext } from "react";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const LargeScreenInvoiceTotal = () => {
  const { singleInvoice } = useContext(INVOICE_CONTEXT);
  return (
    <div className="mt-5 d-none d-sm-block primary-light-background border-radius pt-4">
      <div className="px-5">
        <div className="d-flex blue-dark  justify-content-space-around mb-0">
          <p className="width-40 align-self-end mb-2 header-main">Item Name</p>
          <p className="width-20 mb-2 header-main">Qty</p>
          <p className="width-20 mb-2 header-main">Price</p>
          <p className="width-20 mb-2 header-main">Total</p>
        </div>
        {singleInvoice.items.map((order, index) => {
          return (
            <div key={index} className="d-flex">
              <p className="width-40 mb-1 paragraph-main">{order?.name}</p>
              <p className="width-20 mb-1 paragraph-main">{order?.quantity}</p>
              <p className="width-20 mb-1 paragraph-main">{+order?.price}</p>
              <p className="width-20 mb-1 paragraph-main">
                ${" "}
                {order.total
                  ? order.total.toFixed(2)
                  : (order.quantity * order.price).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="d-flex mt-3 justify-content-between primary-dark-background border-radius">
        <p className="text-white mb-0 p-4">Grand Total</p>
        <h3 className="text-white mb-0 p-4">
          ${singleInvoice.total?.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default LargeScreenInvoiceTotal;
