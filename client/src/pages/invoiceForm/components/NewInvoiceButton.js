import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";
import EditButton from "./EditButton";

const NewInvoiceButton = () => {
  const { setValue, setShowOffCanvas, isEditing } = useContext(INVOICE_CONTEXT);

  return (
    <>
      {isEditing ? (
        <EditButton />
      ) : (
        <div className="d-flex justify-content-between align-items-center mt-2 invoice-button-group">
          <>
            <div>
              <Button
                onClick={() => setShowOffCanvas(false)}
                className="button-edit me-2 rounded-pill px-3 py-2"
              >
                Discard
              </Button>
            </div>
            <div className="">
              <Button
                onClick={() => setValue("status", "draft")}
                type="submit"
                className="me-2 button-draft  rounded-pill md-px-3 py-2"
              >
                Save As Draft
              </Button>
              <Button
                type="submit"
                onClick={() => setValue("status", "pending")}
                className="me-2 button-paid  rounded-pill md-px-3 py-2"
              >
                Save & Send
              </Button>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default NewInvoiceButton;
