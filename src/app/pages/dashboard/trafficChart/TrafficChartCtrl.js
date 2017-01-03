/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, $stateParams, $http, CampaignApi, LocalStorage, $timeout, $log) {

    var campaign_id = $stateParams.uid; //getting ui-route parameter

    getMessagesCount();

    $scope.doughnutData = [];

    $timeout(function () {
      locationSummery();
        }, 1000);

    $timeout(function () {
      initChart();
    }, 4000);

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;

    function getMessagesCount() {
      CampaignApi.getCampaignMessages(campaign_id).then(function (response) {
        if (response) {
          LocalStorage.setTotalMessages(response.length);
        } else {
          $log.error('error getting messages');
        }
      });
    }

    function locationSummery() {
      var totalMessages = LocalStorage.getTotalMessages();

      CampaignApi.getLocaionSummery(campaign_id).then(function (response) {
        if (response){
            $scope.doughnutData = [
              {
                value: '' + (response[0].count),
                color: dashboardColors.white,
                highlight: colorHelper.shade(dashboardColors.white, 15),
                label: response[0]._id,
                percentage: ((response[0].count / totalMessages) * 100).toFixed(2),
                order: 1
              }, {
                value: '' + (response[1].count),
                color: dashboardColors.blueStone,
                highlight: colorHelper.shade(dashboardColors.blueStone, 15),
                label: response[1]._id,
                percentage: ((response[1].count / totalMessages) * 100).toFixed(2),
                order: 4
              }, {
                value: '' + (response[2].count),
                color: dashboardColors.surfieGreen,
                highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
                label: response[2]._id,
                percentage: ((response[2].count / totalMessages) * 100).toFixed(2),
                order: 3
              }, {
                value: '' + (response[3].count),
                color: dashboardColors.silverTree,
                highlight: colorHelper.shade(dashboardColors.silverTree, 15),
                label: response[3]._id,
                percentage: ((response[3].count / totalMessages) * 100).toFixed(2),
                order: 2
              }, {
                value: '' + (response[4].count),
                color: dashboardColors.gossip,
                highlight: colorHelper.shade(dashboardColors.gossip, 15),
                label: response[4]._id,
                percentage: ((response[4].count / totalMessages) * 100).toFixed(2),
                order: 0
              },
            ];

            // var element = {
            //   value: '' + (location.count * 1000),
            //   color: dashboardColors.white,
            //   highlight: colorHelper.shade(dashboardColors.white, 15),
            //   label: location._id,
            //   percentage: ((location.count / 26) * 100).toFixed(2) //divide by total messages in package
            //
            // };
            // if ($scope.doughnutData.length < 5) (
            //     $scope.doughnutData.push(element)
            // )
          // });
        } else {
          $log.error('no response from server');
        }
      });
    }

    function initChart() {
      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
    }

  }
})();