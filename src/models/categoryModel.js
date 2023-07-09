const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    categoryId: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
