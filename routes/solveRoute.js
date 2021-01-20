const express = require('express');
const app = express();
const { faleMais, returnTaxValue } = require('../class')

app.post('/planCalc', async (req, res) => {
  console.log("Iniciando EndPoint")
  var origem = req.body.origem // primeiro ddd
  var destino = req.body.destino // segundo ddd
  var tempo = req.body.tempo // tempo (em minutos)
  var cobranca = returnTaxValue(origem, destino) // valida a taxa a ser cobrada de acordo com a origem e destino.
  var faleMais30 = faleMais(tempo, cobranca, 30)
  var faleMais60 = faleMais(tempo, cobranca, 60)
  var faleMais120 = faleMais(tempo, cobranca, 120)
  var semPlano = cobranca * tempo
  res.json({
    faleMais30: faleMais30,
    faleMais60: faleMais60,
    faleMais120: faleMais120,
    semPlano: semPlano
  })
})
module.exports = app
