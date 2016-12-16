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
            console.log(data);
            pc.campaignInfo.id = data;
            //product will need to display that it has been selected

        };

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

        }
    }

})();