const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

// middleware

app.use(cors());
app.use(express.json());

//connect database
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Database Connected Successfully...");
  })
  .catch((err) => {
    console.error(err);
  });

// starting the server

app.listen(process.env.PORT, () => {
  console.log(`Server started on the PORT: ${process.env.PORT}`);
});
