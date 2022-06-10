import React, { useContext } from "react";
import { Row, Col, FormGroup, Button, Form } from "react-bootstrap";
import { useWatch } from "react-hook-form";
import DeleteIcon from "../../../assets/icon-delete.svg";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import LargeScreenFormList from "../../invoiceForm/components/LargeScreenFormList";

const LargeScreenItemList = () => {
  const { fields, append, remove, control, errors } =
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

  return (
    <div className="d-none d-md-block mt-3">
      <h3>Item List</h3>
      <Row className="mb-2">
        <Col className="mx-2 blue-dark" md={4}>
          Item Name
        </Col>
        <Col className="blue-dark" md={2}>
          QTY
        </Col>
        <Col className="blue-dark" md={3}>
          Price
        </Col>
        <Col className="blue-dark" md={2}>
          Total
        </Col>
      </Row>
      {fields.map((item, i) => {
        const total = +data[i]?.quantity * +data[i]?.price;

        return (
          <Row key={item.id} className="d-flex mb-3">
            <LargeScreenFormList
              name={`items[${i}].name`}
              type="text"
              md="4"
              placeholder="Item Name"
              error={errors?.items && errors?.items[i]?.name}
              message="Can't be empty"
            />
            <LargeScreenFormList
              name={`items[${i}].quantity`}
              type="number"
              md="2"
              placeholder="Qty"
              error={errors?.items && errors?.items[i]?.quantity}
              message="Can't be empty"
            />
            <LargeScreenFormList
              name={`items[${i}].price`}
              type="number"
              md="3"
              placeholder="Price"
              error={errors?.items && errors?.items[i]?.price}
              message="Can't be empty"
            />
            <FormGroup className="my-1" as={Col} md={2}>
              <Form.Control
                name={`items[${i}].total`}
                value={total ? total.toFixed(2) : ""}
                type="text"
                disabled
                readOnly
              />
            </FormGroup>

            <FormGroup className="my-1" as={Col} md="1">
              <img
                onClick={() => remove(i)}
                className="pointer delete-icon"
                src={DeleteIcon}
                alt="delete"
              />
            </FormGroup>
          </Row>
        );
      })}
      <Button
        onClick={handleAppend}
        className="button-edit w-100 rounded-pill py-3 mt-2 mb-2"
      >
        Add a new Item
      </Button>
    </div>
  );
};

export default LargeScreenItemList;
