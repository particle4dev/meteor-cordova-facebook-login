Meteor.startup(function(){
    
});
/**
 * function
 */
//https://github.com/meteor/meteor/blob/47b022841b40f5ca37adccc778ade373559519e5/packages/accounts-ui-unstyled/login_buttons_single.js
// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
capitalize = function(str){
    str = str == null ? '' : String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};

var loginButtonsSession = Accounts._loginButtonsSession;
Template.loginFacebook.events({
    'click .login-button': function (evt, tmp) {
        evt.preventDefault();
        var serviceName = $(evt.currentTarget).attr('data-service');
        //mixpanel.track("loginclicked");
        //close(evt, tmp);
        var callback = function (err) {
            if (!err) {
                //alert("loginsucceed");
                //close(evt, tmp);
            } else if (err instanceof Accounts.LoginCancelledError) {
                // do nothing
                // alert("logincancelled");
                //open(evt, tmp);
            } else if (err instanceof ServiceConfiguration.ConfigError) {
                //loginButtonsSession.configureService(serviceName);
                //alert("configureService");
                //open(evt, tmp);
            } else {
                //alert("loginerror", err.reason);
                console.log(err.reason || "Unknown error");
                //open(evt, tmp);
            }
        };
        // XXX Service providers should be able to specify their
        // `Meteor.loginWithX` method name.
        var loginWithService = Meteor["loginWith" +
                (serviceName === 'meteor-developer' ?
                'MeteorDeveloperAccount' :
                capitalize(serviceName))];

        var options = {}; // use default scope unless specified
        if (Accounts.ui._options.requestPermissions[serviceName])
            options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
        if (Accounts.ui._options.requestOfflineToken[serviceName])
            options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
        loginWithService(options, callback);

        // console.log('fake login');
        // Router.go('weeklyGames');
    },
    'click .logout-button': function(evt, tmp){
        evt.preventDefault();
        Meteor.logout();
    }
});

Template.user.helpers({
    'image': function () {
        if(Meteor.user())
            return Meteor.user().profile.avatar;
        return 'https://www.meteor.com/favicon.png'
    }
});
