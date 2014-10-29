/**
 * Users collection
 */

/**
 * 
 *
 * @param {userId} 
 * @api public
 */
var getNameById = function(userId){
    var user = Users.findOne(userId);
    if(user && user.profile && user.profile.name)
        return user.profile.name;
};

/**
 * export
 */
(function(){
    var self = this;
    self.getNameById        = getNameById;
}).apply(APP.namespace('USERS'));