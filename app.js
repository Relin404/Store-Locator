const express = require("express");
const morgan = require("morgan");

const storesRouter = require("./routes/stores");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/stores", storesRouter);

module.exports = app;
