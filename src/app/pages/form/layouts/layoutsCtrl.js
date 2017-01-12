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

        $scope.submit = function () {
            //this model is holding email as identifier
            var data = lc.personalInfo;
            UserApi.postUserLogin(data).then(function (response) {
                if (response) {
                    userGranted();
                } else {
                lc.personalInfo.errorMessage = "Your Email and Password do not match";
                $log.info(lc.personalInfo.errorMessage);
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
            //put to /user.password
            $log.info('recover the password');
        };

        function trafficDirector(role) {
            if (role == "admin") {
                $location.url('tables/admin');
            } else {
                CampaignApi.getCampaigns().then(function (response) {
                    if (!response) {
                        $log.info('there was an error getting your campaigns');
                    } else if (jQuery.type(response) == "array" && response.length == 0) {
                        lc.message = true;
                    } else {
                        LocalStorage.setCurrentCampaign(response[0].id);
                        $location.url('dashboard/' + response[0].id); //direct to most recent campaign
                    }
                });
            }
        }

    }
})();