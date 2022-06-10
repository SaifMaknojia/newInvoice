import React, { useContext } from "react";
import { Form, FormGroup, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const ControllerInput = ({
  label,
  name,
  placeholder,
  xs,
  md,
  type,
  message,
  error,
  defaultValue
}) => {
  const { register, control } = useContext(INVOICE_CONTEXT);

  return (
    <FormGroup className="my-1" as={Col} xs={xs} md={md}>
      <Form.Label className="blue-dark my-1 text-capitalize">
        {label}
      </Form.Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Form.Control
              placeholder={placeholder}
              className={error ? "border-red" : `text-capitalize`}
              {...register(name, { required: message })}
              type={type}
              {...field}
            />
          );
        }}
      />
      {error && (
        <p className="text-danger font-size-10 pt-1">{error.message}</p>
      )}
    </FormGroup>
  );
};

export default ControllerInput;
