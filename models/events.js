//var mongoose = require('mongoose');

/**
 * User schema
 */
//var EventSchema = new mongoose.Schema({
//    username: {type: String, required: true},
//    eventName: {type: String, required: true, index: {unique: true}},
//    eventDes: {type: String, required: true},
//    location: {type: String, required: true},
//    date: {type: Date, required: true},
//    time: {type: String, required: true}
//});
//
//EventSchema.Create = function (user, callback) {
//
//    var Event = mongoose.model('Event', EventSchema);
//    var newEvent = new Event({
//        username: event.username,
//        eventName: event.eventName,
//        eventDes: event.eventDes,
//        location: event.location,
//        date: event.date,
//        time: event.time
//    });
//
//// save the user
//    newEvent.save(function (err) {
//        // In case of any error, return using the done method
//        if (err) {
//            return callback(err);
//        }
//        // User Registration succesful
//        return callback(null, newUser);
//    });
//};

/**
 * Register UserSchema
 */
//module.exports = mongoose.model('Event', EventSchema);