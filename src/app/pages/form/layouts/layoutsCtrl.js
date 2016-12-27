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
            console.log(data);
            UserApi.postUserLogin(data).then(function (response) {
                if (response) {
                    console.log(response);
                    userGranted();
                } else {
                lc.personalInfo.errorMessage = "Your Email and Password do not match";
                console.log(lc.personalInfo.errorMessage);
            }

            });
        };

        function userGranted() {

            UserApi.getCurrentUser().then(function (response) {
                $log.info(response);
                if (response) {
                    LocalStorage.setUserRole(response.data.role.name)
                    trafficDirector(response.data.role.name);
                } else {
                    $log.info('Trouble getting your user info')
                }
            });


        }

        $scope.recoverPassword = function() {
            $log.info('recover the freakin password');
        };

        function trafficDirector(role) {
            if (role == "admin") {
                $location.url('tables/admin');
            } else {
                // var callID = LocalStorage.routeToRecentDashboard();
                // $log.info(callID);
                // if(!callID) {
                //     console.log('please create a campaign to see your dashboard');
                //     lc.message = true;
                // } else {
                //     $location.url('dashboard/' + callID);
                // }
                CampaignApi.getCampaigns().then(function (response) {
                    if (!response) {
                        $log.info('there was an error getting your campaigns');
                    } else if (jQuery.type(response) == "array" && response.length == 0) {
                        lc.message = true;
                        console.log('there are no campaigns associated with this account would you like to create a compaign?')
                    } else {
                        LocalStorage.setCurrentCampaign(response[0].id);
                        $location.url('dashboard/' + response[0].id); //direct to most recent campaign
                        }
                });
            }
        }

    }
})();