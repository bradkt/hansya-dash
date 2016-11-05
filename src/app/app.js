'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);

var config = firebase.initializeApp({
  apiKey: "AIzaSyC2MJdJ7HvYTIYgHYFkQyhhbfZAzEv5mw0",
  authDomain: "hansya-one.firebaseapp.com",
  databaseURL: "https://hansya-one.firebaseio.com",
  storageBucket: "hansya-one.appspot.com",
});

