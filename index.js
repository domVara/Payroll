//mongo --host mongodb://finalcountdown:abond172@54.242.164.123:27017
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let item = require('./routes/api/items')
let employee = require('./routes/api/employees')

mongoose.connect('mongodb://finalcountdown:abond172@54.242.164.123:27017/payroll');

// Configure bodyparser to handle post requests

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(item)
app.use(employee)


const port = process.env.PORT || 5000;
app.listen(port);


console.log('App is listening on port ' + port);
