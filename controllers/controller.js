//requires
var express = require('express');
var burger = require('../models/burger.model');

//express router
var router = express.Router();

//routes----------

//-/burgers/add
router.post('/burgers/add', function (req, res) {
  console.log(req.body)
  burger.new(req.body.name, function (data) {
    console.log(data);
    res.sendStatus(200);
  })
})


//-/burgers/eat
router.put('/burgers/eat/:id', function (req, res) {
  burger.eat(req.params.id, function (data) {
    console.log(data);
    res.sendStatus(200);
  })
})

//-/burgers/digest
router.delete('/burgers/digest/:id', function (req, res) {
  burger.digest(req.params.id, function (data) {
    console.log(data);
    res.sendStatus(200);
  })
})

//-/
router.get('*', function (req, res) {
  burger.all(function (data) {
    res.render('index', { burgerData: data })
  })
})

//----------------

module.exports = router;

