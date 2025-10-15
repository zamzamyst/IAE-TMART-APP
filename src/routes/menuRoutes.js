const express = require("express");
const router = express.Router();
const menuController = require("../controllers/itemsController");

router.get("/", menuController.getItems);

module.exports = router;
