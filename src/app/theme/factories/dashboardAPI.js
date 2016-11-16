/**
 * Created by brad on 11/8/16.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('dashboardApi', dashboardApi);

    /** @ngInject */
    function dashboardApi($http) {

        return {
            getCampaign: getCampaign,
            getData: getData,
        }

        function getCampaign(data) {
            $http.get('http://localhost:8888/api/todos/', {params:{"data": data}})
                .then(complete).catch(failed);
        }

        function getData(data) {
            $http.post('http://localhost:8888/api/todo/', data)
                .then(complete).catch(failed);
        }

        function complete(response) {
            return response.data;
        }

        function failed(error) {
            return error.data;
        }


    }

})();