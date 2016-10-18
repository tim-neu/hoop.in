const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const app = express();

app.use(express.static('./public'));

app.use(bodyParser.json());

app.listen(3000, function () {
	console.log('Listnening on 3000');
});
