var express = require('express');
var {get} = require('../database/index.js');
var router = express.Router();

router.get('/:id', function(request, response){
    get('passwords', {'password': request.params.id}).then(passwords => {
        response.send(passwords);
    });
});

router.post('/store', function(request, response){
    
});

module.exports = router;