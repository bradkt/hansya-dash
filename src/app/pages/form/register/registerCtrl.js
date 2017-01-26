/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('RegisterCtrl', RegisterCtrl);

    /** @ngInject */
    function RegisterCtrl($scope, UserApi, $location, toastr) {
        var rc = this;
        rc.personalInfo = {};

        // $scope.test = 'test';

        $scope.submit = function () {
            rc.personalInfo.email = rc.personalInfo.identifier;
            var company = rc.personalInfo.registerCompany;

            UserApi.getCompany().then(function (response) {

                if (response) {

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
                    registerUser(company);
                }
            });
        };


        function registerUser(){
            var data = rc.personalInfo;

            // var data = {
            //     "identifier" : rc.personalInfo.identifier,
            //     "username" : rc.personalInfo.username,
            //     "password" : rc.personalInfo.password
            // };
            // console.log(data);

            UserApi.registerUser(data).then(function (response) {

                if (response) {
                    toastr.success('You have successfully registered', 'Success', {
                        "autoDismiss": false,
                        "positionClass": "toast-top-center",
                        "type": "success",
                        "timeOut": "5000",
                        "extendedTimeOut": "2000",
                        "allowHtml": false,
                        "closeButton": false,
                        "tapToDismiss": true,
                        "progressBar": false,
                        "newestOnTop": true,
                        "maxOpened": 0,
                        "preventDuplicates": false,
                        "preventOpenDuplicates": false
                    });
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