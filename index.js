//mongo --host mongodb://finalcountdown:abond172@54.152.37.40
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let item = require('./routes/api/items')
let employee = require('./routes/api/employees')
let team = require('./routes/api/team')

var cors = require('cors');


mongoose.connect('mongodb://finalcountdown:abond172@54.152.37.40/payroll');

const port = process.env.PORT || 5000;
app.listen(port);


var frontEndRoute

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "http://ec2-100-24-4-43.compute-1.amazonaws.com:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(bodyParser.json());
app.use(express.static('public'))
app.use(item)
app.use(employee)
app.use(team)



console.log('App is listening on port ' + port);
