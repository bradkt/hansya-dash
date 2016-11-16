/**
 * Created by brad on 11/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('IndustryApi', IndustryApi);

    /** @ngInject */
    function IndustryApi($http) {

        return {
            getIndustries: getIndustries,
            createIndustry: createIndustry
        };

        function getIndustries(data) {
            return $http.get('http://localhost:1337/industry', data).then(complete).catch(failed);
        }

        function createIndustry(data) {
            return $http.post('http://localhost:1337/industry', data).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();