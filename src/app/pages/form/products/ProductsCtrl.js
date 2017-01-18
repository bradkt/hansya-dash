/**
 * Created by brad on 9/7/16.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('ProductsCtrl', ProductsCtrl);

    /** @ngInject */
    function ProductsCtrl($log, $scope, baConfig, ProductApi, CampaignApi, $uibModal, $location) {
        var pc = this;
        pc.productInfo = {};
        pc.campaignInfo = {};
        pc.campaignInfo.keywords = [];

        $scope.campaignInfo = pc.campaignInfo;

        // $scope.open = function () {
        //     $uibModal.open({
        //         animation: true,
        //         templateUrl: 'app/pages/form/products/widgets/productModal.html',
        //         size: 'md',
        //         controller: ProductsCtrl,
        //         controllerAs: pc,
        //         bindToController: true,
        //         resolve: {
        //             items: function () {
        //                 return $scope.items;
        //             }
        //         }
        //     });
        // }

        // console.log($location.path());

        ProductApi.getProducts().then(function (response) {
            if (response){
                pc.productInfo = response.data;
            } else {
                $log.info('no response from server');
            }

        });

        //use ng-if and create one more scope object to avoid another api call

        $scope.addProduct = function (product) {
            // var clearPrice = document.getElementsByClassName("close");
            // console.log(clearPrice);
            // console.log('selected product id');
            pc.selectedProduct = product;
            console.log(pc.selectedProduct);
            pc.campaignInfo.id = product.id;
            $scope.priceToSubmit = product.price * 100;
            // console.log($scope.priceToSubmit);

            //product will need to display more obviously that it has been selected

        };
        
        $scope.editProductSelection = function () {
            console.log('fired');
            pc.selectedProduct = {};
        }

        // Stripe Response Handler
        $scope.stripeCallback = function (code, result) {
            if (result.error) {
                console.log('it failed! error: ' + result.error.message);
            } else {
                console.log('success! token: ' + result.id);
            }
        };

        // returns a 400 if user has not been assigned to company
        $scope.submit = function () {
            var data =
                {
                    // "user": "4aeae113-91d4-404d-b95f-4f85611454a6",
                    "keywords": pc.campaignInfo.keywords,
                    "product": pc.campaignInfo.id,
                    "paid": false,
                    "visibility": "user",
                    "audience": pc.campaignInfo.audience,
                    "location": pc.campaignInfo.location,
                    "timeframe": pc.campaignInfo.timeframe,
                    "intent" : pc.campaignInfo.intent
                };

                CampaignApi.postCampaign(data).then(function (response) {
                    if (response) {
                        $log.info("posting campaign");
                    } else {
                        $log.info("Issue posting campaign");
                    }
                });
                $scope.submitted = true;
                pc.campaignInfo.keywords = [];
        };

    }
})();