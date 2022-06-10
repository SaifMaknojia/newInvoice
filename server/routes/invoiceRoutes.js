const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoiceController");

router
  .route("/")
  .get(invoiceController.getAllInvoice)
  .post(invoiceController.createInvoice);

router
  .route("/:id")
  .get(invoiceController.getIndividualInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice);

module.exports = router;
