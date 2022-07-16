const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.post("/crianca", controller.createCrianca)
router.get("/crianca", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)
router.get("/crianca/itensDeNecessidade", controller.itensDeNecessidade)
router.put("/crianca/:id", controller.updateCrianca)
router.delete("/crianca/:id", controller.deleteCriancaById)



module.exports = router
