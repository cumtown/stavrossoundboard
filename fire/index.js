const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
  var config = {
    apiKey: "AIzaSyB_Mqt1ZnVw8djhf9qUDOVuiF2VISWcsDM",
    authDomain: "cumtown-1e7ab.firebaseapp.com",
    databaseURL: "https://cumtown-1e7ab.firebaseio.com",
    projectId: "cumtown-1e7ab",
    storageBucket: "cumtown-1e7ab.appspot.com",
    messagingSenderId: "817496598304"
  };
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
