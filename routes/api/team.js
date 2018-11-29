let Employee = require("../../models/employee")
let express = require('express')
let router = require('express').Router();



//get all the teams
router.get('/api/teams',(req,res) => {
    Employee.find({}).distinct('team')
      .then(team => {res.json(team); console.log("aasd")})
});





module.exports = router
