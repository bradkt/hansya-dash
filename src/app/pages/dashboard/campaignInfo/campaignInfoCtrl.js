/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('campaignInfoCtrl', campaignInfoCtrl);

  /** @ngInject */
  function campaignInfoCtrl($scope, $timeout, baConfig, baUtil, $stateParams, $http, CampaignApi) {
    $http({
      url: '',
      method: 'get',
      params: {uid: $stateParams.uid},
    }).then(function (response) {
      console.log($stateParams.uid);
    });

    var goals = {
      // CampaignApi.getcampaignGoalsHere
    };

    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);

    $scope.campaignData = [{
      color: pieColor,
      description: 'Number of Messages Purchased',
      keywords: "10,000"
    }, {
      color: pieColor,
      description: 'Campaign Keywords',
      keywords: "flip, flap, flapjack, burrito, taco, scuba diving"
    }
    ];
  }
})();
