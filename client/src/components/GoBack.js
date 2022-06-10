import React from "react";
import { Link } from "react-router-dom";
import GoBackContent from "./GoBackContent";

const GoBack = () => {
  return (
    <Link to={"/"}>
      <GoBackContent />
    </Link>
  );
};

export default GoBack;
