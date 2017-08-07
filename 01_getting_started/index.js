var express = require('express'); 
var app = express(); 

app.get('/', (req, res) => {
    res.send('Heyyyy there Elbaum!'); 
});

app.get('/yo', (req, res) => {
    res.send('Yooooo there Elbaum!'); 
});

var server = app.listen(3000, () => {
    console.log("Hi Pete...Server running at http://localhost:" + server.address().port); 
});