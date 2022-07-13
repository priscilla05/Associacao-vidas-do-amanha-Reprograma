const controller = require('../controller/usersController');
const express = require('express');
const router = express.Router();



router.post("/user/", controller.create)
router.post("/users/login", controller.login)
router.get("/users/", controller.getAll)
router.delete("/users/:id", controller.deleteById)

module.exports = router