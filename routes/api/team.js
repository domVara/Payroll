let Employee = require("../../models/employee")
let express = require('express')
let router = require('express').Router();



//get all the teams
router.get('/api/teams',(req,res) => {
    Employee.find({}).distinct('team')
      .then(team => {res.json(team)})
});

router.get('/api/teams/:teamName',(req,res) => {
    Employee.find({team: req.params.teamName})
      .then(team => {res.json(team)})
});





module.exports = router
