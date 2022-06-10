import React, { useContext } from "react";
import { FormGroup, Col, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const LargeScreenFormList = ({
  type,
  placeholder,
  md,
  name,
  message,
  error
}) => {
  const { control, register } = useContext(INVOICE_CONTEXT);

  return (
    <FormGroup className="my-1" as={Col} md={md}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Control
            placeholder={placeholder}
            className={error ? "border-red" : "text-capitalize"}
            {...register(name, { required: message })}
            type={type}
            {...field}
          />
        )}
      />
      {error && (
        <p className="text-danger font-size-10 pt-1">{error.message}</p>
      )}
    </FormGroup>
  );
};
export default LargeScreenFormList;
