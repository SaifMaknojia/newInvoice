export const StatusStyle = (value) => {
  if (value === "pending") {
    return {
      color: "rgb(255, 143, 0)",
      backgroundColor: "rgba(255, 143, 0, .3)",
      margin: 0,
      padding: "10px 25px",
      borderRadius: "20px"
    };
  } else if (value === "paid") {
    return {
      color: "#33D69F",
      backgroundColor: "rgba(51, 214, 159, .2)",
      margin: 0,
      padding: "10px 25px",
      borderRadius: "20px"
    };
  } else if (value === "draft") {
    return {
      color: "#373B53",
      backgroundColor: "rgba(55, 59, 83, .3)",
      margin: 0,
      padding: "10px 25px",
      borderRadius: "20px"
    };
  }
};

export const getDate = (value) => {
  return value.substring(0, 10);
};

export const handleModal = (val, fn) => fn(!val);

export const handleNewInvoice = (val, fn) => {
  fn(!val);
};
