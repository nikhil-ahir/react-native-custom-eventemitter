/**
 * Created by nikhila on 23/12/15.
 */

let EventEmitter = require("EventEmitter");
let _ = require("lodash");

class CustomEventEmitter extends EventEmitter {
    constructor() {
        super();
        this._subscriptions = [];
    }
    _getSubscriptionObject(type, callback) {
        return _.find(this._subscriptions, (subscription) => {
                return subscription.eventType === type
                && subscription.listener === callback;
        });
    }
    addEventListener(type, callback) {
        this._subscriptions.push(this.addListener(type, callback));
    }
    removeEventListener(type, callback) {
        var getSubscriptionObject = this._getSubscriptionObject(type, callback);
        if(!_.isEmpty(getSubscriptionObject)) {
            this._subscriber.removeSubscription(getSubscriptionObject);
        }
    }
}

module.exports = CustomEventEmitter;