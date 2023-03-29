import React, { useContext } from "react";
import { Form, Container, FormGroup } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import ControllerInput from "./ControllerInput";
import InvoiceFormBillTo from "./InvoiceFormBillTo";
import LargeScreenItemList from "./LargeScreenItemList";
import MobileScreenItemList from "./MobileScreenItemList";
import NewInvoiceButton from "./NewInvoiceButton";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

const FormContainer = () => {
  const {
    handleSubmit,
    control,
    errors,
    register,
    allInvoices,
    setAllInvoices,
    setShowOffCanvas,
    singleInvoice,
    isEditing,
  } = useContext(INVOICE_CONTEXT);

  const params = useParams();

  const handleSubmitLogic = (obj) => {
    // adding value to nested array items total
    obj.items.map((item) => {
      item.total = +item.price * +item.quantity;
      return item;
    });

    //creating grand total
    let grandTotal = 0;
    obj.items.forEach((item) => {
      grandTotal += item.total;
    });
    obj.total = grandTotal;

    // adding payment terms and invoice Date
    const current = new Date(obj.createdAt);
    current.setDate(current.getDate() + +obj.paymentTerms);
    obj.paymentDue = current.toISOString();
  };

  const handlePostRequestLogic = (obj) => {
    handleSubmitLogic(obj);
    //updating state and posting the request on server
    const alphabet = Math.random().toString(36).substring(2, 4);
    const val = Math.floor(1000 + Math.random() * 9000);
    obj.invoiceNumber = alphabet + val;
    axios
      .post("https://invoice-app-server.onrender.com/api/v1/invoices", obj)
      .then((data) => setAllInvoices([...allInvoices, data.data.invoice]))
      .catch((err) => console.log(err));
  };

  const handlePatchRequest = (obj) => {
    handleSubmitLogic(obj);
    axios
      .patch(
        `https://invoice-app-server.onrender.com/api/v1/invoices/${params.id}`,
        obj
      )
      .then((data) => {
        setAllInvoices(
          allInvoices.map((invoice) => {
            if (invoice._id === params.id) {
              return {
                invoice,
                obj,
              };
            }
            return invoice;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    if (isEditing) {
      handlePatchRequest(data);
    } else {
      handlePostRequestLogic(data);
    }

    //closing the modal
    setShowOffCanvas(false);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-3 form-margin position-relative"
    >
      <Container>
        <InvoiceFormBillTo />
        <ControllerInput
          placeholder="PostalCode"
          xs="12"
          type="date"
          label="Invoice Date"
          name="createdAt"
          message="Choose Payment Date"
          defaultValues={singleInvoice?.createdAt}
          error={errors.createdAt}
        />
        <FormGroup>
          <Form.Label className="blue-dark my-1">Payment Terms</Form.Label>
          <Controller
            name="paymentTerms"
            className="blue-dark my-1"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...register("paymentTerms", {
                  required: "Select Payment Terms",
                })}
                className={errors.paymentTerms ? "border-red" : ""}
              >
                <option value="1">Next Day</option>
                <option value="7">Next 7 Days</option>
                <option value="14">Next 14 Days</option>
                <option value="30">Next 30 Days</option>
              </Form.Select>
            )}
          />
          {errors.paymentTerms && (
            <p className="text-danger font-size-10 pt-1">
              {errors.paymentTerms.message}
            </p>
          )}
        </FormGroup>
        <ControllerInput
          placeholder="Project Description"
          xs="12"
          type="text"
          label="Project Description"
          name="description"
          message="Add a description"
          error={errors.description}
        />
        <MobileScreenItemList />
        <LargeScreenItemList />
      </Container>
      <NewInvoiceButton />
    </Form>
  );
};

export default FormContainer;
