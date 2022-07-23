const express = require ("express");
 
const router = express.Router();
 
router.get("/", function (req, res) {
    res.status(200).send({
        title: "Associação vidas do Amanhã",
        version: "1.0.0"
    })
});
 
module.exports = router;

//tenho q colocar mais coisas aqui?