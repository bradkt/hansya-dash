/**
 * Created by brad on 9/9/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    function PageTopCtrl($scope, $log, $location, LocalStorage) {


        $scope.logout = function() {
            $log.info('add function to log out');
        };

        $scope.newCampaign = function() {
            $location.url('form/products');
        };

        $scope.returnToDashboard = function() {
            //get current user and return to their log in page
            $log.info('back to the dashboard');
            //todo: will need to handle if page was reloaded make call to api vs. localStore will return id undefined
            var id = LocalStorage.getCurrentCampaign();
            $log.info(id);
            $location.url('dashboard/' + id.id);
        };
    }
})();