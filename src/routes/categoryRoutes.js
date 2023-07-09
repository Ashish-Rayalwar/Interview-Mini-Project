const { craeteCategory, getCategories } = require("../controller/category");
const { verify } = require("../middleware/auth");

const router = require("express").Router();

router.post("/", verify, craeteCategory);
router.get("/", verify, getCategories);

module.exports = router;
