/**
 * Created by brad on 9/9/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    function PageTopCtrl($scope, $log, $location, LocalStorage, UserApi) {


        $scope.logout = function() {
            UserApi.logout().then(function (response) {
                if (response) {
                    console.log(response);
                    $location.url('/form/login');
                } else {
                    $log.info('trouble while logging out');
                }
            });

        };

        $scope.newCampaign = function() {
            $location.url('form/products');
        };

        $scope.returnToDashboard = function() {
            //get current user and return to their log in page
            $log.info('back to the dashboard');

            var id = LocalStorage.getCurrentCampaign();

            if (!id) {
                // console.log('please create a campaign to see your dashboard');
                // console.log('components/pageTopCtrl');
                $location.url('form/login');
            } else {
                $log.info(id);
                $location.url('dashboard/' + id);
            }
        };
    }
})();