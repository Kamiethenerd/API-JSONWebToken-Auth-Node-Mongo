var express = require('express')
    , router = express.Router()
    , user = require('../models/user');

/**
 *  GET: register
 * */
router.get('/', function (req, res, next) {
    res.render('/');
});

/**
 * POST: register
 */
router.post('/', function (req, res, next) {

    if (req.body.eventName === undefined || !req.body.eventName.length) {
        console.log("Event Name Required.");
        res.status(400).send("Event Name Required.");
    } else if (req.body.eventDes === undefined || !req.body.eventDes.length) {
        console.log("Event Description Required.");
        res.status(400).send("Event Description Required.");
    } else if (req.body.location === undefined || !req.body.location.length) {
        console.log("Location Required.");
        res.status(400).send("Location Required.");
    } else if (req.body.date === undefined || !req.body.date.length) {
        console.log("Date Required.");
        res.status(400).send("date Required.");
    } else if (req.body.time === undefined || !req.body.time.length) {
        console.log("Time Required.");
        res.status(400).send("Time Required.");
    } else {
        console.log(req.user);
        user.findByIdAndUpdate(req.user, {$push: {events: req.body}}, function (err, model) {
            console.log(user);
                if (err) {
                    console.log(err)
                }
                return res.json(model)
            });
    }
});

module.exports = router;
