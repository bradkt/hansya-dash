/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('RegisterCtrl', RegisterCtrl);

    /** @ngInject */
    function RegisterCtrl($scope) {
        var rc = this;
        rc.personalInfo = {};

        $scope.submit = function () {
            console.log('hi from the registration form');

            var data = $scope.rc.personalInfo;
            console.log(data);

            // var customer = data.compayName.toString().trim().toLowerCase().replace(/\s+/, "");

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });

            setTimeout(this.redirect, 700)
        };


        function redirect() {
         window.location.href = '/form/login';
        }

        rc.arePersonalInfoPasswordsEqual = function () {
            return rc.personalInfo.confirmPassword && rc.personalInfo.password == rc.personalInfo.confirmPassword;
        };
    }
})();