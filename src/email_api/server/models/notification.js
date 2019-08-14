//TODO: substitute mongoose with couchbase model wrapper
var mongoose = require('mongoose');
const _ = require('lodash');

class NotificationError extends Error {
    constructor(message) {
      super(message);
      this.name = "NotificationError";
    }
};

var NotificationSchema = new mongoose.Schema({
    message_id: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    pii_id: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    permissions: [String],
    isActive: {
        type: Boolean,
        default: true
    }
});

NotificationSchema.methods.toJSON = function() {
    var Notification = this;
    var NotificationObject = Notification.toObject();
    return _.pick(NotificationObject, ['_id', 'Notificationname', 'description', 'permissions', 'isActive']);
};

var Notification = mongoose.model('Notification', NotificationSchema);

module.exports = {
    Notification,
    NotificationError
};