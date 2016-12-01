/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope, ProductApi) {
        var pc = this;
        pc.productInfo = {};

        ProductApi.getProducts().then(function (response) {
            if (response){
                pc.productInfo = response.data;
            } else {
                console.log('no response from server');
            }

        });

        $scope.addProduct = function (data) {
            console.log(data);
        };

        $scope.submit = function () {
            console.log('product form submit func fired');


        }
    }

})();