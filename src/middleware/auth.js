const verify = async (req, res, next) => {
  try {
    let apiKey = req.headers["x-api-key"];

    if (!apiKey || apiKey !== "abcd-efgh-ijlk-1234") {
      return res.status(403).json({ error: "Unauthorized" });
    }
    next();
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
    console.log("error in verify", error.message);
  }
};

module.exports = { verify };
