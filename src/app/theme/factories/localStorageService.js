/**
 * Created by brad on 12/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('LocalStorage', LocalStorage);

    /** @ngInject */
    function LocalStorage() {

        return {
            setCurrentCampaign: setCurrentCampaign,
            getCurrentCampaign: getCurrentCampaign
        };

        var currentCampaign;

        function getCurrentCampaign () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return currentCampaign;
        }

        function setCurrentCampaign (data) {
            //You could also set specific attribute of the form data instead
            currentCampaign = {id: data};
        }
    }

})();