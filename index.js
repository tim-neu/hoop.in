const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.listen(3000);
