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

        // once logged in need to send user to their dashboard or if admin (no dashboard) to admin panel
        // is their a way to identify different roles from request
        // role = "1c03f0fb-4b9a-4905-82e3-71d198d1f303"
        function userGranted() {

            UserApi.getCurrentUser().then(function (response) {
                if (response) {
                    trafficDirector(response.data.role.id);
                } else {
                    $log.info('Trouble getting your user info')
                }
            });


        }


        $scope.recoverPassword = function() {
            $log.info('recover the freakin password');
        }

        function trafficDirector(role) {
            console.log('polo');
            if (role == "94716dba-3a03-4678-b4b7-089ac5f0e543") {
                $location.url('tables/admin');
            } else {
                CampaignApi.getCampaigns().then(function (response) {
                    if (!response) {
                        $log.info('there was an error getting your campaigns');
                    } else if (response == []) {
                        console.log('there are no campaigns associated with this accont would you like to create a compaign?')
                    } else {
                        console.log('get campaigns call');
                        console.log(response);
                        console.log('end get campaign call');
                        LocalStorage.setCurrentCampaign(44114411); //response[0]
                        $location.url('dashboard/' + 44114411); //direct to most recent campaign ('dashboard/' + response[0])

                    }
                });
            }
        }

    }
})();