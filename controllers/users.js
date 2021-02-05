var router = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../config');

//post creates new user
router.post('/user', function(req,res,next){
    var user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
    })

    bcrypt.hash(req.body.password, 10, function(err,hash){
        if(err) return next(err);

        user.password = hash;
        user.save(function(err){
            if(err) return next(err)
            res.send(201); //201 means success
        })
    })
})

//get finds a new user and returns him as a json object
router.get('/user', function(req,res){
    //check if token is present, which would signify a valid session
    if(!req.headers["x-auth"]) return res.send(401); 
    
    var token = jwt.decode(req.headers['x-auth'], config.secret) //decode token to get userID
    User.findOne({_id: token.id}, function(err, user){
        if(err) return next(err);
        res.json(user);
    })
})


module.exports = router;