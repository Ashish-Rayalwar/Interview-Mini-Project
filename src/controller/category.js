const categoryModel = require("../models/categoryModel");

const craeteCategory = async (req, res) => {
  try {
    const data = req.body;
    const { categoryName } = data;

    const category = await categoryModel.findOne({
      categoryName: categoryName,
    });

    if (category)
      return res.status(409).json({ message: "this category already exists" });

    const categoryId = (await categoryModel.find()).length + 1;

    data.categoryId = categoryId;
    const create = await categoryModel.create(data);

    return res
      .status(201)
      .json({ message: "category created successfully", data: create });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (categories.length === 0)
      return res.status(404).json({ message: "categories not found" });

    const totalCategories = categories.length;
    return res
      .status(200)
      .json({ totalCategories: totalCategories, category: categories });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { craeteCategory, getCategories };
