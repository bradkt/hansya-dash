/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('campaignInfoCtrl', campaignInfoCtrl);

  /** @ngInject */

  function campaignInfoCtrl($scope, $timeout, baConfig, baUtil, $stateParams, $http, LocalStorage, CampaignApi, ProductApi) {


    // var cic = this;
    // // cic.selectedCampaignsData = '';
    //
    //   $http({
    //   url: '',
    //   method: 'get',
    //   params: {uid: $stateParams.uid},
    // }).then(function (response) {
    //   console.log($stateParams.uid);
    // });


    $scope.selectedCampaignsData = '';


    displayAvailableCampaigns();
    // loadCampaignData();
    // campaignMetaData();


    function displayAvailableCampaigns() {
      CampaignApi.getCampaigns().then(function (response) {
        if (response){
          $scope.campaignsData = response;
          LocalStorage.setCurrentCampaign(response[0].id);

          campaignMetaData();
          loadCampaignData ();
        } else {
          console.log('no response from server');
        }
      });

    }

    function campaignMetaData() {
      var id = LocalStorage.getCurrentCampaign().id;

      CampaignApi.getCampaign(id).then(function (response) {
        if (response){
          console.log(response);
          displayProductInfo(response.product);
          $scope.keywords = response.keywords;
        } else {
          console.log('unable getcampaign from server');
        }
      });
    }

    function loadCampaignData() {
      //location to current campaign id in url
      var id = LocalStorage.getCurrentCampaign().id;
      CampaignApi.getCampaignData(id).then(function (response) {
        if (response) {
          $scope.bigData = response;
          $scope.conversations = response.conversations;
          $scope.messages = response.messages;
          $scope.posters = response.posters;

          console.log($scope.conversations);
          console.log($scope.messages);
          console.log($scope.posters);

        } else {
          console.log('unable getcampaignDATA from server');
        }
      });
    }
    
    function displayProductInfo(productID) {
        ProductApi.getProduct(productID).then(function (response) {
          if (response){
            console.log(response);
            $scope.datapoints = response.data.datapoints;
          } else {
            console.log('no response from server');
          }
        });
    }

    // CampaignApi.getTotalLikes(id).then(function (response) {
    //   console.log(response);
    // });

    // CampaignApi.getEngagementData(id).then(function (response) {
    //   console.log(response);
    // });

    // CampaignApi.getLocaionSummery(id).then(function (response) {
    //   console.log(response);
    // });

    $scope.submit = function () {
      if ($scope.selectedCampaignsData) {
        $scope.selectedCampaignsData = JSON.parse($scope.selectedCampaignsData);
        LocalStorage.setCurrentCampaign($scope.selectedCampaignsData.id);
        campaignMetaData();
        loadCampaignData();
      } else {
        console.log('please select campaign');
      }
    }
  }
})();
