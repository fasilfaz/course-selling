const express = require("express");
const router = express.Router();
const userControl = require("../../controllers/userController");


router.post("/signup", userControl.signup);
// router.post("/signin", userControl.signin);

module.exports = router;
