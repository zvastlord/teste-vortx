const express = require('express');
const cors = require('cors')
const solveRoute = require('./routes/solveRoute')


const app = express();
app.use(cors())
app.use(express.json())
const port = 8080



app.use(solveRoute)

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});