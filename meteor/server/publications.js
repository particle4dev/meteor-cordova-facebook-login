/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');

/**
 * Helpers
 */
var logging = function(collection, message){
    if(!_.isString(message))
        message = '';
    logtrace('[PUBLICATIONS][' + collection + ']', message);
};

var _publishCursor = function (cursor, sub, collection, options) {
    if(!isCursor(cursor)) {
        sub.ready();
        return;
    }
    var observeHandle = cursor.observeChanges({
        added: function (id, fields) {
            if(options && _.isFunction(options.beforeAdded))
                fields = options.beforeAdded.call(sub, id, fields);
            sub.added(collection, id, fields);
        },
        changed: function (id, fields) {
            if(options && _.isFunction(options.beforeChanged))
                fields = options.beforeChanged.call(sub, id, fields);
            sub.changed(collection, id, fields);
        },
        removed: function (id) {
            sub.removed(collection, id);
        }
    });
    var name = 'anonymous';
    if(sub.userId) {
        name = APP.namespace('USERS').getNameById(sub.userId);
    }
    logging(collection, 'subscribe by ' + name);
    sub.onStop(function () {
        logging(collection, 'unsubscribe by ' + name);
        observeHandle.stop();
    });

    sub.ready();
};

/**
 * PUBLICATIONS
 */
Meteor.publish("delay", function(){
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, 1000);
    Fiber.yield();
    this.ready();
});