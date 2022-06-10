import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { INVOICE_CONTEXT } from "../../../contextApi/InvoiceContext";

const EditButton = () => {
  const { setShowOffCanvas } = useContext(INVOICE_CONTEXT);

  const handleSaveOnEdit = () => {
    setShowOffCanvas(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mt-2 invoice-button-group">
        <Button
          // adding invoiceStatus on button clicked
          onClick={handleSaveOnEdit}
          // type="submit"
          className="me-2 button-edit  rounded-pill px-3 py-2"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={handleSaveOnEdit}
          className="me-2 button-paid rounded-pill px-3 py-2"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditButton;
