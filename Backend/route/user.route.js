const express = require("express");

const userController = require("../controller/user.controller")

const router = express.Router();


//api
router.get("/login",userController.Login);

router.post("/registration",userController.Registration);

module.exports = router;