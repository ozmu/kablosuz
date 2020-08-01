var express = require('express');
var {get} = require('../database/index.js');
var wifi = require('node-wifi');
var router = express.Router();

router.get('/scan', function(request, response){
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

router.post('/store', function(request, response){
    
});

module.exports = router;