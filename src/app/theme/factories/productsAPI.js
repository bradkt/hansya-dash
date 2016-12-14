/**
 * Created by brad on 11/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('ProductApi', ProductApi);

    /** @ngInject */
    function ProductApi($http) {

        return {
            getProducts: getProducts,
            postProduct: postProduct
        };

        function getProducts() {
            return $http.get('http://localhost:1337/product').then(complete).catch(failed);
        }

        function postProduct(data) {
            return $http.post('http://localhost:1337/product', data).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();