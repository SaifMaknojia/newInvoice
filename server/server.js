const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => console.log("Db connection successful"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("server started at 8000");
});
