const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute");

const cors = require("cors");

const app = express();

const port = process.env.port | 5000;

app.use(express.json());

app.use(cors());

app.use("/api", routes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
