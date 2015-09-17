var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/events', function(req, res, next) {
    console.log(req.user);
    res.json();
});

module.exports = router;
