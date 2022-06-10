import React from "react";
import ArrowLeft from "./../assets/icon-arrow-left.svg";

const GoBackContent = () => {
  return (
    <div>
      <div className="pointer d-flex align-items-center pointer-cursor">
        <img
          style={{ width: "10px", height: "10px" }}
          src={ArrowLeft}
          alt="click"
        />
        <p className="mt-3 ms-3 black">Go back</p>
      </div>
    </div>
  );
};

export default GoBackContent;
