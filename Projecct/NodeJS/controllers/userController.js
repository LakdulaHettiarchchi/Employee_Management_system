const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var { User } = require('../models/user');

router.post('/register', (req, res, next) => {
    var us = new User({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,

    });

    us.save((err, doc) => {
        if (!err) {

            res.send(doc);
        }

        else {
            console.log('Error in user save:' + JSON.stringify(err, undefined, 2));
            // console.log(err);

        }

    });


});





module.exports = router;