require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const criancaRoutes = require('./router/criancaRoutes')
const padrinhoRoutes = require('./router/padrinhoRoutes')
const feiraRoutes = require('./router/feiraRoutures')
const usersRoutes = require('./router/usersRoutes')

const app = express()


app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(criancaRoutes)
app.use(padrinhoRoutes)
app.use(usersRoutes)
//app.use(feiraRoutes)

module.exports = app