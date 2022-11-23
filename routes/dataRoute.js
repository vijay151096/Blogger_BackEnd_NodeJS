const express = require('express')
const router = express.Router();
const importController = require("../controller/dataController")

router.route("/import")
    .post(importController.importData)

router.route("/clean")
    .delete(importController.cleanData)

module.exports = router