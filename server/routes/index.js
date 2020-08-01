var express = require('express');
var {get} = require('../database/index.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mongo', function(req, res, next){
  get().then((items) => {
    res.send(items);
  })
});

module.exports = router;