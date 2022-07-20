const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.post("/crianca", controller.createCrianca)
router.get("/crianca", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)
router.get("/condition", controller.getCondition)
router.put("/condition/:id", controller.updateCrianca)
router.patch("/condition/:id", controller.updateCondition)
router.delete("/crianca/:id", controller.deleteCriancaById)



module.exports = router
