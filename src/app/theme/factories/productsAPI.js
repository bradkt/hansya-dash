/**
 * Created by brad on 11/15/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('ProductApi', ProductApi);

    /** @ngInject */
    function ProductApi($http, config) {

        var URL = config.api;
        // var URL = "https://test-hansya-consumer-api.herokuapp.com";
        // var URL = "http://localhost:1337";

        return {
            getProducts: getProducts,
            postProduct: postProduct,
            deleteProduct: deleteProduct,
            getProduct: getProduct
        };

        function getProduct(id) {
            return $http.get(URL + '/product/' + id ).then(complete).catch(failed);
        }

        function getProducts() {
            return $http.get(URL + '/product').then(complete).catch(failed);
        }

        function postProduct(data) {
            return $http.post(URL + '/product', data).then(complete).catch(failed);
        }

        function deleteProduct(id) {
            return $http.delete(URL + '/product/' + id).then(complete).catch(failed);
        }

        function complete(response) {
            return response;
        }

        function failed(error) {
            console.log(error.statusText);
        }


    }

})();