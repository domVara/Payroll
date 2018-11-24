let Item = require("../../models/item")
let express = require('express')
let router = require('express').Router();


//get all the items
router.get('/api/item',(req,res) => {
  Item.find()
    .then(items => res.json(items));
});

//add an item
router.post('/api/item',(req,res) => {
  const newItem = new Item({
    name: req.body.name
  })
  newItem.save().then(item => res.json(item))
});

//delete an item
router.delete('/api/item/:id',(req,res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({sucess : true})))
    .catch(err => res.status(404).json({sucess: false}))
  });


module.exports = router
