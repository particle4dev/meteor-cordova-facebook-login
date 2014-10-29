/**
 * utils function share on both client and server 
 */

/**
 * Random array or string
 */
rand = _.bind(Random.choice, Random);
emailVerified = function (user) {
    return _.some(user.emails, function (email) {
        return email.verified;
    });
};

/**
 * Mongo
 */
isCursor = function (c) {
    return c && c.observe;
};