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
            var name = rc.personalInfo.name;
            UserApi.getCompany().then(function (response) {

                if (response) {
                    console.log("getting companies");
                    for (var i = 0; i <= response.data.length; i++) {
                        if (name == response.data[i].name) {
                            console.log("match found");
                            var id = response.data[i].id;
                            registerUser(id);
                            break;
                        } else {
                            console.log("no company match")
                        }
                    }
                } else {
                    console.log("Issue getting companies");
                    console.log(response);
                }

            });

            // UserApi.postCompany(companyName).then(function (response) {
            //     console.log(response);
            //     if (response) {
            //         registerUser();
            //     } else {
            //         // rc.personalInfo.message.registrationIssue = "Issue during your registration";
            //         console.log("Issue during your registration");
            //         console.log(response);
            //     }
            // });
        };


        function registerUser(id){
            rc.personalInfo.company = id;
            var data = rc.personalInfo;
            console.log('polo');
            console.log(data);

            UserApi.registerUser(data).then(function (response) {
                if (response) {
                    console.log(response);
                    console.log("You have successfully registered");
                    $location.url('form/login');
                } else {
                    // rc.personalInfo.message.registrationIssue = "Issue during your registration";
                    console.log("Issue during your registration");
                    console.log(response);
                }
            })
        }

        rc.arePersonalInfoPasswordsEqual = function () {
            return rc.personalInfo.confirmPassword && rc.personalInfo.password == rc.personalInfo.confirmPassword;
        };
    }
})();