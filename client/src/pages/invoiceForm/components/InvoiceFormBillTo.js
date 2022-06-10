import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import ControllerInput from "./ControllerInput";

const InvoiceFormBillTo = () => {
  const { errors } = useContext(INVOICE_CONTEXT);

  return (
    <Row>
      <h3 className="purple-dark header-main">Bill To</h3>
      <ControllerInput
        placeholder="Client Name"
        label="Client Name"
        type="text"
        name="clientName"
        xs="12"
        message="Client Name can't be empty"
        error={errors?.clientName}
      />
      <ControllerInput
        placeholder="Client Email"
        label="Client Email"
        name="clientEmail"
        xs="12"
        message="Client Email can't be empty"
        error={errors?.clientEmail}
      />
      <ControllerInput
        placeholder="Enter street name"
        label="Street"
        name="clientAddress.street"
        message="Can't be empty"
        xs="12"
        type="text"
        error={errors?.clientAddress?.street}
      />
      <ControllerInput
        placeholder="City"
        label="City"
        name="clientAddress.city"
        xs="6"
        md="4"
        type="text"
        message="Can't be empty"
        error={errors?.clientAddress?.city}
      />
      <ControllerInput
        placeholder="PostalCode"
        xs="6"
        md="4"
        label="Postal Code"
        name="clientAddress.postCode"
        message="Can't be empty"
        error={errors?.clientAddress?.postCode}
      />
      <ControllerInput
        placeholder="Country"
        xs="12"
        md="4"
        label="Country"
        name="clientAddress.country"
        message="Can't be empty"
        error={errors?.clientAddress?.country}
      />
    </Row>
  );
};

export default InvoiceFormBillTo;
