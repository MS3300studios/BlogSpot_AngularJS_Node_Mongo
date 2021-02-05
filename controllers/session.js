var router = require('express').Router();
var User = require('../models/user');
var bcrypt = require("bcrypt");
var jwt = require('jwt-simple');
var config = require('../config');


//this happens when there is a request for a new session (user logs in)
router.post('/session', function(req, res, next){
    User.findOne({email: req.body.email})
        .select('password')
        .exec(function(err, user){
            if(err) return next(err)
            if(!user) return res.send(401);
            bcrypt.compare(req.body.password, user.password, function(err, valid){
                if(err) return next(err);
                if(!valid) return res.sendStatus(401);
                //token created for the duration of the session
                var token = jwt.encode({id: user.id}, config.secret);
                res.send(token);
            })
        })
})

module.exports = router;