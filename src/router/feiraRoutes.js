const controller = require('../controller/criancasController')
const express = require('express')

const router = express.Router()

router.post("/crianca", controller.createCrianca)
router.get("/criancas", controller.findAllCriancas)
router.get("/crianca/:id", controller.findCriancaById)
router.put("/crianca/:id", controller.updateCrianca)
router.delete("/criancas/:id", controller.deleteById)



module.exports = router