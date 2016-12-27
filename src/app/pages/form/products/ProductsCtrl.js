/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($scope, ProductApi, CampaignApi) {
        var pc = this;
        pc.productInfo = {};
        pc.campaignInfo = {};

        ProductApi.getProducts().then(function (response) {
            if (response){
                pc.productInfo = response.data;
            } else {
                console.log('no response from server');
            }

        });

        $scope.addProduct = function (data) {
            $scope.priceToSubmit = "";
            console.log('selected product id');
            console.log(data.id);
            pc.campaignInfo.id = data.id;
            $scope.priceToSubmit = data.price * 100;
            //product will need to display more obviously that it has been selected

        };

        // returns a 400 if user has not been assigned to company
        $scope.submit = function () {
            console.log(pc.campaignInfo);
            console.log(pc.campaignInfo.id);

            var data = {
                "keywords": [pc.campaignInfo.keywords],
                "product": pc.campaignInfo.id,
                "paid": false,
                "visibility": "user"
            };

            console.log(data);
            CampaignApi.postCampaign(data).then(function (response) {
                console.log(response);
            });
            $scope.submitted = true;
        }
    }

})();