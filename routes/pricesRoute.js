const router = require("express").Router();
const { prices, symbolPrices } = require("../controllers/pricesController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, prices);

router.get("/:symbols", verifyToken, symbolPrices);

module.exports = router;
