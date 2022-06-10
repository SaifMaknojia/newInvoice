import React, { useContext } from "react";
import { Row, Col, FormGroup, Button } from "react-bootstrap";
import { useWatch } from "react-hook-form";

import DeleteIcon from "../../../assets/icon-delete.svg";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import ControllerInput from "./ControllerInput";

const MobileScreenItemList = () => {
  const { append, remove, fields, control, errors } =
    useContext(INVOICE_CONTEXT);

  const handleAppend = () => {
    append({
      name: "",
      quantity: "",
      price: "",
      total: ""
    });
  };
  const data = useWatch({
    control,
    name: "items"
  });

  const handleDelete = (index) => {
    remove(index);
  };

  return (
    <Row className="d-md-none mt-3">
      <h3>Item List</h3>
      {fields.map((item, i) => {
        const total = +data[i]?.quantity * +data[i]?.price;
        // console.log(error)
        return (
          <Row key={item.id} className="mt-2">
            <ControllerInput
              name={`items[${i}].name`}
              label="Item Name"
              type="text"
              xs="12"
              placeholder="Item Name"
              error={errors?.items && errors?.items[i]?.name}
              message="Can't be empty"
            />
            <ControllerInput
              label="QTY"
              type="number"
              xs="3"
              placeholder="QTY"
              name={`items[${i}].quantity`}
              error={errors?.items && errors?.items[i]?.quantity}
              message="Can't be empty"
            />
            <ControllerInput
              label="Price"
              type="number"
              xs="3"
              placeholder="Price"
              name={`items[${i}].price`}
              error={errors?.items && errors?.items[i]?.price}
              message="Can't be empty"
            />
            <div className=" col-4 my-1">
              <label className="form-label my-1 blue-dark my-1 ">Total</label>
              <input
                value={total ? total.toFixed(2) : ""}
                name={`items[${i}].total`}
                className="form-control text-capitalize"
                readOnly
              />
            </div>
            <FormGroup className="my-1" as={Col} xs="1">
              <p className="my-2">&nbsp;</p>
              <img
                onClick={() => handleDelete(i)}
                className="mx-4 pointer delete-icon"
                src={DeleteIcon}
                alt="delete"
              />
            </FormGroup>
          </Row>
        );
      })}
      <Button
        onClick={handleAppend}
        className="button-edit w-100 rounded-pill py-3 mt-3"
      >
        Add a new Item
      </Button>
    </Row>
  );
};

export default MobileScreenItemList;
