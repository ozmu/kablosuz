var express = require('express');
var wifi = require('node-wifi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wireless', function(request, response, next){
  wifi.init({
    iface: null
  });

  wifi.scan((error, networks) => {
    if (error) {
      response.send(`Error: ${error}`);
      console.log('Error: ', error);
    }
    else {
      response.send(`Networks: ${JSON.stringify(networks)}`);
      console.log('Networks: ', networks);
    }
  })
})

module.exports = router;
