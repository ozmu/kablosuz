var express = require('express');
var wifi = require('node-wifi');
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
})

router.get('/wireless', function(request, response, next){
  wifi.init({
    iface: null
  });

  wifi.scan((error, networks) => {
    if (error) {
      response.send(`Errorq: ${error}`);
      console.log('Error: ', error);
    }
    else {
      response.json(networks);
    }
  })
});

module.exports = router;