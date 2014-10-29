/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');
var Files = APP.namespace('Files');

/**
 * Methods, functions
 */

var loadUsers = function(){
    var users = Files.loadStaticJSONFile('users.json');
    _.each(users.data, function(user){
        loginfo('FIXTURES - User', user.username);
        if (!Users.findOne({username: user.username}, {fields: {_id:1}})){
            user.updated = new Date();
            user.profile.image = SC.AVATAR;
            try {
                Users.insert(user);
            }
            catch (err){
                logerror('FIXTURES -- User Insert Failed', err.message);
            }
        }
    });
};

// export
(function(){
    var self = this;
    self.init = function(){
        loadUsers();
    };
}).apply(APP.namespace('FIXTURES'));