/**
 * Created by brad on 12/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('LocalStorage', LocalStorage);

    /** @ngInject */
    function LocalStorage(CampaignApi, $window, $rootScope) {

        angular.element($window).on('storage', function(event) {
            if (event.key === 'hansya-storage') {
                $rootScope.$apply();
            }
        });

        return {
            setCurrentCampaign: setCurrentCampaign,
            getCurrentCampaign: getCurrentCampaign,
            getUserRole: getUserRole,
            setUserRole: setUserRole,
            getTotalMessages: getTotalMessages,
            setTotalMessages: setTotalMessages
        };


        function getTotalMessages () {
            return $window.localStorage && $window.localStorage.getItem('total-messages');
        }

        function setTotalMessages (data) {
            $window.localStorage && $window.localStorage.setItem('total-messages', data);
            // console.log('local storage campaign id');
            // console.log($window.localStorage);
        }



        function getCurrentCampaign () {
            return $window.localStorage && $window.localStorage.getItem('hansya-storage-campaignid');
        }

        function setCurrentCampaign (campaignID) {
            $window.localStorage && $window.localStorage.setItem('hansya-storage-campaignid', campaignID);
            // console.log('local storage campaign id');
            // console.log($window.localStorage);
        }

        function getUserRole () {
            return $window.localStorage && $window.localStorage.getItem('hansya-storage-role');

        }

        function setUserRole (userRole) {
            $window.localStorage && $window.localStorage.setItem('hansya-storage-role', userRole);
            // console.log('local storage user role');
            // console.log($window.localStorage);
        }




    }

})();