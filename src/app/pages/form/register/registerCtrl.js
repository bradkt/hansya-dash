/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('RegisterCtrl', RegisterCtrl);

    /** @ngInject */
    function RegisterCtrl($scope, UserApi, $location) {
        var rc = this;
        rc.personalInfo = {};

        $scope.submit = function () {
            console.log('registration form');

            var data = $scope.rc.personalInfo;
            var reg = {
                "email": "brad@gmail.com",
                "username": "brad",
                "password": "password1234"
            };

            UserApi.registerUser(reg).then(function (response) {
                console.log(response);
                if (response) {
                    registerUser();
                } else {
                    // rc.personalInfo.message.registrationIssue = "Issue during your registration";
                    console.log("Issue during your registration");
                    console.log(response);
                }
            });
        };

        function registerUser(){
            // rc.personalInfo.message.userRegistered = "You have successfully registered";
            console.log("You have successfully registered");
            $location.url('form/login');
        }

        rc.arePersonalInfoPasswordsEqual = function () {
            return rc.personalInfo.confirmPassword && rc.personalInfo.password == rc.personalInfo.confirmPassword;
        };
    }
})();