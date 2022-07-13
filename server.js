const app = require('./src/app')
const DB_PORT = process.env.DB_PORT 

app.listen(DB_PORT, () => console.log(`Está ok! Rodando, porta: ${DB_PORT}`))

//const PORT = 8080
//app.listen(PORT, () => console.log(`Tudo certo rodando, porta: ${PORT}`))