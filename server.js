// server.js
// set up ============================================================
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3001));

// routes ============================================================
app.post('/api/teste', function (req, res) {
    res.json({"Conteudo": "alow"});
});

app.get('/', function(req, res) {
    res.send('api')
  });

// listen ============================================================
app.listen(app.get('port'), function () {
    console.log('Api escutando na porta ', app.get('port'));
    console.log('');
});