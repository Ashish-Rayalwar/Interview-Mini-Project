const { createProduct, getProducts } = require("../controller/product");
const { verify } = require("../middleware/auth");

const router = require("express").Router();

router.post("/save", verify, createProduct);
router.get("/list", verify, getProducts);

router.all("/*", (req, res) => {
  console.log("Plz enter valid route");
  res.status(400).send({ status: false, message: "invalid route" });
});

module.exports = router;
