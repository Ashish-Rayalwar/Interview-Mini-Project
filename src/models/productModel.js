const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const productSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    // categoryId: {
    //   type: ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    categoryId: {
      type: Number,
      ref: "Category",
    },
  },
  { timestamps: true }
);

// Create Product model
module.exports = mongoose.model("Product", productSchema);
