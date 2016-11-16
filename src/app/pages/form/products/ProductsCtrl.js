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

        $scope.submit = function () {
            console.log('hi from the product form');
            ProductApi.getProducts().then(function (response) {
                console.log(response);
            });
            // var data = $scope.pc.productInfo;
            // console.log(data);

        }
    }

})();