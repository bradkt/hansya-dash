/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('campaignInfoCtrl', campaignInfoCtrl);

  /** @ngInject */

  function campaignInfoCtrl($log, $scope, $location, $timeout, baConfig, baUtil, $stateParams, $http, LocalStorage, CampaignApi, ProductApi) {

    var id = $stateParams.uid; //getting ui-route parameter

    $scope.selectedCampaignsData = '';

    //this call resets the localstorage campaign id allowing other functions to access
    displayAvailableCampaigns();

    function displayAvailableCampaigns() {
        CampaignApi.getCampaigns().then(function (response) {
          if (response){
            $scope.campaignsData = response;
            LocalStorage.setCurrentCampaign(response[0].id);

            campaignMetaData();
            // loadCampaignData ();
          } else {
            $log.info('no response from server');
          }
        });
      // }
    }

    function campaignMetaData() {

      CampaignApi.getCampaign(id).then(function (response) {
        if (response){

          displayProductInfo(response.product);
          $scope.keywords = response.keywords;
        } else {
          $log.info('unable get campaign from server');
        }
      });
    }

    function displayProductInfo(productID) {
        ProductApi.getProduct(productID).then(function (response) {
          if (response){
            $scope.datapoints = response.data.datapoints;
          } else {
            $log.info('no response from server');
          }
        });
    }

    $scope.submit = function () {
      if ($scope.selectedCampaignsData) {
        $scope.selectedCampaignsData = JSON.parse($scope.selectedCampaignsData);
        LocalStorage.setCurrentCampaign($scope.selectedCampaignsData.id);
        campaignMetaData();
        // loadCampaignData();
        $location.url('dashboard/' + $scope.selectedCampaignsData.id);
      } else {
        $log.info('please select campaign');
      }
    }
  }
})();
