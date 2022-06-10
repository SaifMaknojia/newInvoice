import React from "react";
import { Offcanvas } from "react-bootstrap";
import GoBackContent from "../../../components/GoBackContent";

const OffCanvasTitle = ({ setShowOffCanvas }) => {
  return (
    <Offcanvas.Header closeButton>
      <div onClick={() => setShowOffCanvas(false)}>
        <GoBackContent />
      </div>
    </Offcanvas.Header>
  );
};

export default OffCanvasTitle;
