const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Invoices = require("./../models/invoiceModel");

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => console.log("Db connection successful"))
  .catch((err) => console.log(err));

const invoices = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

//ImportData in mongoDB
const importData = async () => {
  try {
    await Invoices.create(invoices);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
};

//deleteData from collection
const deleteData = async () => {
  try {
    await Invoices.deleteMany();
    console.log("DeletedData");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
