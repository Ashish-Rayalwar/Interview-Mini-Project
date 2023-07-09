const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const multer = require("multer");
const { dbConnection } = require("./database/db");
const category = require("./routes/categoryRoutes");
const products = require("./routes/productRoutes");
require("dotenv").config();
const url = process.env.URL;
const port = process.env.PORT || 5000;
dbConnection(url);

app.use(multer().any());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.status(200).json("server start"));
app.use("/api/product/categories", category);
app.use("/api/product", products);

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
