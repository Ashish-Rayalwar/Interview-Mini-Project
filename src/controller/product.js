const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const data = req.body;

    const category = await categoryModel.findOne({
      categoryName: data.categoryName,
    });

    const categoryId = (await categoryModel.find().length) + 1;
    if (!category) {
      const len = await categoryModel.create({
        categoryName: data.categoryName,
        categoryId: categoryId,
      });
      data.categoryId = categoryId;
      // const create = await productModel.create(data);
      // return res.status(201).json({data:create})
    } else {
      const productId = (await productModel.find()).length + 1;

      data.productId = productId;
      const create = await productModel.create(data);
      return res
        .status(201)
        .json({ message: "Product saved sucesfully", data: create });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const categoryId = req.query.categoryId;
    const category = await categoryModel.findOne({ categoryId });

    const products = await productModel.find({ categoryId: categoryId });

    if (products.length === 0)
      return res.status(404).json({ message: "Products not found" });

    const newArr = products.map((x) => {
      const { _id, __v, createdAt, updatedAt, ...rest } = x._doc;
      return rest;
    });

    return res.status(200).json({
      categoryId: categoryId,
      categoryName: category.categoryName,
      data: newArr,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts };
