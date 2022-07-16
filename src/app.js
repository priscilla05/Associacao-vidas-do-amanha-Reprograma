require('dotenv').config()
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

app.use('/',criancaRoutes)
app.use('/',padrinhoRoutes)
app.use('/',usersRoutes)
app.use('/, index')


module.exports = app