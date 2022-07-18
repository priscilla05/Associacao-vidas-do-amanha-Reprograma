const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.post("/crianca", controller.createCrianca)
router.get("/crianca", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)
router.get("/condicao", controller.condicao)
router.patch("/condicao/:id", controller.updateCrianca)
router.delete("/crianca/:id", controller.deleteCriancaById)



module.exports = router
