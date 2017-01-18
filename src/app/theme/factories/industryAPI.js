/**
 * Created by brad on 11/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('IndustryApi', IndustryApi);

    /** @ngInject */
    function IndustryApi($http) {

        // var URL = "https://test-hansya-consumer-api.herokuapp.com";
        var URL = "http://localhost:1337";

        return {
            getIndustries: getIndustries,
            postIndustry: postIndustry
        };

        function getIndustries() {
            return $http.get(URL + '/industry').then(complete).catch(failed);
        }

        function postIndustry(data) {
            return $http.post(URL + '/industry', data).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();