let Employee = require("../../models/employee")
let express = require('express')
let router = require('express').Router();


//get all the Employee
router.get('/api/employee',(req,res) => {
  Employee.find()
    .then(employee => res.json(employee));
});

//add an Employee
router.post('/api/employee',(req,res) => {
  const newEmployee= new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    team: req.body.team,
    salary: req.body.salary,
    positionTitle: req.body.positionTitle,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    branchLocation: req.body.branchLocation,
  })
  newEmployee.save().then(employee => res.json(employee))
});

//delete an employee
router.delete('/api/employee/:id',(req,res) => {
  Employee.findById(req.params.id)
    .then(employee => employee.remove().then(() => res.json({sucess : true})))
    .catch(err => res.status(404).json({sucess: false}))
  });

module.exports = router
