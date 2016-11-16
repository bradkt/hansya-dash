/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('RegisterCtrl', RegisterCtrl);

    /** @ngInject */
    function RegisterCtrl($scope, UserApi) {
        var rc = this;
        rc.personalInfo = {};

        $scope.submit = function () {
            console.log('registration form');

            var data = $scope.rc.personalInfo;
            var reg = {
                username: data.username,
                email: data.email,
                password: data.password
            };

            UserApi.registerUser(reg).then(function (response) {
                console.log(reg);
                if (response.headers.status) {
                    console.log(response);
                    registerUser();
                } else {
                    rc.personalInfo.message.registrationIssue = "Issue during your registration";
                    console.log(rc.personalInfo.message.registrationIssue);
                    console.log(response);
                }
            });
        };

        function registerUser(){
            rc.personalInfo.message.userRegistered = "You have successfully registered";
            console.log(rc.personalInfo.message.userRegistered);
            $location.url('form/login');
        }

        rc.arePersonalInfoPasswordsEqual = function () {
            return rc.personalInfo.confirmPassword && rc.personalInfo.password == rc.personalInfo.confirmPassword;
        };
    }
})();