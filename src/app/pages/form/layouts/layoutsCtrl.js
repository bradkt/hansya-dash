/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('LayoutsCtrl', LayoutsCtrl);

    /** @ngInject */
    function LayoutsCtrl($scope, $location, $log , UserApi, CampaignApi, LocalStorage) {
        var lc = this;
        lc.personalInfo = {};

        $scope.name = "getting the test testing";

        $scope.submit = function () {
            //this model is holding email as identifier
            var data = lc.personalInfo;
            console.log(data);
            UserApi.postUserLogin(data).then(function (response) {
                if (response) {
                    console.log(response);
                    userGranted();
                } else {
                console.log(response);
                lc.errorMessage = "Your Email and Password do not match or there is a bad connection";
                $log.info(lc.errorMessage);
            }

            });
        };

        function userGranted() {
            UserApi.getCurrentUser().then(function (response) {
                if (response) {
                    LocalStorage.setUserRole(response.data.role.name)
                    trafficDirector(response.data.role.name);
                } else {
                    $log.info('Trouble getting your user info')
                }
            });
        }

        $scope.recoverPassword = function() {
            lc.forgotPasswordMessage = true;
        };

        $scope.backToLogin = function() {
            lc.forgotPasswordMessage = false;
        };

        $scope.sendResetEmail = function () {
            console.log('Telling server to send an email');
            var email = {email: lc.personalInfo.identifier};
            console.log(email);
            UserApi.recoverPassword(email).then(function (response) {
                if (response) {
                    console.log(response);

                } else {
                    console.log(response);
                    $log.info('Trouble requesting your reset Email')
                }
            });
        };

        function trafficDirector(role) {
            if (role == "admin") {
                $location.url('tables/admin');
            } else {
                CampaignApi.getCampaigns().then(function (response) {
                    if (!response) {
                        $log.info('there was an error getting your campaigns');
                    } else if (jQuery.type(response) == "array" && response.length == 0) {
                        lc.noCampaignsMessage = true;
                    } else {
                        LocalStorage.setCurrentCampaign(response[0].id);
                        $location.url('dashboard/' + response[0].id); //direct to most recent campaign
                    }
                });
            }
        }

    }
})();