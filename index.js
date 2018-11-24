//mongo --host mongodb://finalcountdown:abond172@54.242.164.123:27017
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let item = require('./routes/api/items')
let employee = require('./routes/api/employees')
var cors = require('cors');


mongoose.connect('mongodb://finalcountdown:abond172@54.242.164.123:27017/payroll');

// Configure bodyparser to handle post requests

// Add headers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.static('public'))
app.use(item)
app.use(employee)







const port = process.env.PORT || 5000;
app.listen(port);


console.log('App is listening on port ' + port);
