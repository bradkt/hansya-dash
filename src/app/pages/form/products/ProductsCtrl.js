/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope) {
        var pc = this;
        pc.productInfo = {};

        $scope.submit = function () {
            console.log('hi from the product form');

            var data = $scope.pc.productInfo;
            console.log(data);

        }
    }

})();