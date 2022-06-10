const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const invoiceRouter = require("./routes/invoiceRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("*", cors());

app.use("/api/v1/invoices", invoiceRouter);

module.exports = app;
