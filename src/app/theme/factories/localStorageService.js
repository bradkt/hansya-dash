/**
 * Created by brad on 12/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('LocalStorage', LocalStorage);

    /** @ngInject */
    function LocalStorage(CampaignApi) {

        return {
            setCurrentCampaign: setCurrentCampaign,
            getCurrentCampaign: getCurrentCampaign,
            getUserRole: getUserRole,
            setUserRole: setUserRole
        };

        var currentCampaign;
        var userRole; // = "registered"?

        //need to check the var and if undefined (as in page refreshed) make a call to api and re-store the data

        function getCurrentCampaign () {
            return currentCampaign;
        }

        function setCurrentCampaign (data) {
            currentCampaign = {id: data};
        }

        function getUserRole () {
            return userRole;
        }

        function setUserRole (data) {
            userRole = {role: data};
        }


    }

})();