require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const criancaRoutes = require('./router/criancaRoutes')
const padrinhoRoutes = require('./router/padrinhoRoutes')
const index = require('./router/index')

const usersRoutes = require('./router/usersRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express()
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));



app.use(express.json())
app.use(cors())

mongoose.connect()

app.use("/vidasDoAmanha",criancaRoutes)
app.use("/vidasDoAmanha",padrinhoRoutes)
app.use("/vidasDoAmanha/users",usersRoutes)
app.use(index)


module.exports = app