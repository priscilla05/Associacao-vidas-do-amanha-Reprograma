const controller = require('../controller/padrinhosController')
const express = require('express')

const router = express.Router()


router.post("/padrinho", controller.createPadrinho)
router.get("/padrinho", controller.getAllPadrinhos)
router.get("/padrinho/inativos", controller.getAllPadrinhosInativos)
router.get("/padrinho/:id", controller.findById)
router.put("/padrinho/:id", controller.updatePadrinho)
router.delete("/padrinho/:id", controller.deleteById)



module.exports = router