import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const ProductItem = () => {
  const { singleInvoice } = useContext(INVOICE_CONTEXT);

  return (
    <Container>
      {singleInvoice.items.map((order, index) => {
        return (
          <div
            key={index}
            className="d-flex px-3 justify-content-between align-items-center pt-2"
          >
            <>
              <div className="">
                <h3 className="mb-0 header-main text-capitalize">
                  {order.name}
                </h3>
                <div className="d-flex">
                  <p className="paragraph-main mb-0 blue-dark">
                    {order.quantity && order.quantity}&nbsp;
                  </p>
                  <p className="paragraph-main mb-0 blue-dark">
                    x ${order.price}
                  </p>
                </div>
              </div>
              <div>
                <p>${order.total?.toFixed(2)}</p>
              </div>
            </>
          </div>
        );
      })}
    </Container>
  );
};

export default ProductItem;
