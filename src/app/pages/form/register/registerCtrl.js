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
            rc.personalInfo.email = rc.personalInfo.identifier;
            var company = rc.personalInfo.registerCompany;
            console.log(rc.personalInfo);
            UserApi.getCompany().then(function (response) {
                if (response) {
                    console.log("getting companies");
                    console.log(response);

                    for (var i = 0; i < response.data.length; i++) {


                        if (company == response.data[i].name) {
                            console.log("match found");
                            rc.personalInfo.company = response.data[i].id;
                            registerUser();
                            break;
                        } else {
                            console.log("no company match");
                        }
                    }
                    registerUser(company);
                } else {
                    console.log("Issue getting companies");
                    console.log(response);
                    registerUser(company);
                }
            });
        };


        function registerUser(){
            var data = rc.personalInfo;
            console.log(data);
            UserApi.registerUser(data).then(function (response) {
                if (response) {
                    console.log("You have successfully registered");
                    $location.url('form/login');
                } else {
                    // rc.personalInfo.message.registrationIssue = "Issue during your registration";
                    console.log("Issue during your registration");

                }
            })
        }

        rc.arePersonalInfoPasswordsEqual = function () {
            return rc.personalInfo.confirmPassword && rc.personalInfo.password == rc.personalInfo.confirmPassword;
        };
    }
})();