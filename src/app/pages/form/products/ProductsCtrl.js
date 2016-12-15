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

            var data = {

                // id: 1000,
                // requestedDate: new Date(),
                "keywords": ['Merge Industry and', 'Whatever', 'Else', 'Is', 'Added'],
                // user: 'ca2addbe-4aec-4679-96cd-c526aeea30ee',
                "product": pc.campaignInfo.id,
                "paid": false,
                "visibility": 'company'

            };
            console.log(data);
            CampaignApi.postCampaign(data).then(function (response) {
                console.log(response);
            });

        }
    }

})();