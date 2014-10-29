// https://github.com/meteor/meteor/blob/devel/examples/todos/mobile-config.js
// http://docs.meteor.com/#mobileconfigjs
App.info({
  id: "com.demo.main",
  name: 'demo login fb',
  description: '',
  author: 'Le Hoang',
  email: 'particle4dev@gmail.com',
  website: 'http://127.0.0.1'
});

App.setPreference("SplashScreen", "screen");
App.setPreference("SplashScreenDelay", "10000");

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '603073779802324',
  APP_NAME: 'demo-meteor-login'
});

// App.icons({
//   // Android - XXX these are the same as iOS for now
//   'android_ldpi': 'resources/icons/icon-60.png',
//   'android_mdpi': 'resources/icons/icon-60.png',
//   'android_hdpi': 'resources/icons/icon-72.png',
//   'android_xhdpi': 'resources/icons/icon-72@2x.png'
// });

// App.launchScreens({
//   // Android
//   "android_ldpi_portrait": 'resources/splash/android_ldpi_portrait/screen.png',
//   "android_ldpi_landscape": 'resources/splash/android_ldpi_landscape/screen.png',
//   "android_mdpi_portrait": 'resources/splash/android_mdpi_portrait/screen.png',
//   "android_mdpi_landscape": 'resources/splash/android_mdpi_landscape/screen.png',
//   "android_hdpi_portrait": 'resources/splash/android_hdpi_portrait/screen.png',
//   "android_hdpi_landscape": 'resources/splash/android_hdpi_landscape/screen.png',
//   "android_xhdpi_portrait": 'resources/splash/android_xhdpi_portrait/screen.png',
//   "android_xhdpi_landscape": 'resources/splash/android_xhdpi_landscape/screen.png'
// });