// server.js
// set up ===========================================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// routes ===========================================================
app.post('/api/teste', function (req, res) {
    var enviado = "";

    if (req.body.bar == 'undefined')
    {
        enviado = req.body.bar;
    }
    else
    {
        enviado = req.body.Bar;
    }

    res.json({"Conteudo": "alow", "Enviado": enviado});
});

app.get('/', function(req, res) {
    res.send('api')
  });

// listen ===========================================================
app.listen(app.get('port'), function () {
    console.log('Api escutando na porta ', app.get('port'));
    console.log('');
});