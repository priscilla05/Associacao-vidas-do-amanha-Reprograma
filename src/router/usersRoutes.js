const controller = require('../controller/usersController');
const express = require('express');
const router = express.Router();



router.post("/user/", controller.create)
router.post("/user/login", controller.login)
router.get("/user/", controller.getAll)
router.delete("/user/:id", controller.deleteById)

module.exports = router