var express = require('express')

var app = express()

app.get('/', (req, res)=>{
    res.send('{ "response": "Bonjour !!" }')
});
app.get('/retour', (req, res)=>{
    res.send('{ "response": "ça fonctionne" }')
});

app.listen(process.env.PORT || 3000)
module.exports = app